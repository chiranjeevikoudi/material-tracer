'use strict';

var app = require('../../server/server');
var loopback = require("loopback");
var baseUtils = require('../../utilities/base-utilities');
var message = require('../../utilities/Messages.json');
var utilities = require('../../utilities/utilities.js');
var errorHandler = require('../../utilities/error-log-handler');
var apiMongoUtilities = require("../../utilities/api-mongo-utilities");
var apiInputDataValidation = require("../../utilities/api-calls-input-data-validations");

var clientRegistrationRequiredFields = ["name", "email", "password", "contact", "address", "geopoint", "type"];
var clientRegistrationOptionFields = [];

var clientLoginRequiredFields = ["email", "password"];
var clientLoginOptionFields = [];


const accessTokenLimit = 30;
const FIVE_MINUTES = 60 * 5;
const ONE_DAY = 60 * 60 * 24;


var logger = require("tracer").colorConsole({
  format: "{{timestamp}} [{{title}}] {{message}} (in {{file}}:{{line}})",
  dateformat: "dd-mm-yyyy HH:MM:ss TT"
});


var loginDetails = ["email", "password"];
var addProvidersDetails = ["id", "providers"];
var accessTokenDetails = ["id", "accessToken"];
var getClientDataDetails = ["properties"];
var passwordLength = 6;

module.exports = function (Client) {

  Client.remoteMethod('register', {
    http: {path: '/register', verb: 'post'},
    accepts: {
      arg: 'data', type: 'object', http: {'source': 'body'}
    },
    returns: {
      arg: 'Registration', type: 'object', root: true
    }
  });
  Client.beforeRemote('register', function (ctx, unused, next) {

    var errorObject = {};
    var inputDataDetails = {
      "type": "object",
      "apiName": "api/client/register",
      "requiredFields": clientRegistrationRequiredFields,
      "optionalFields": clientRegistrationOptionFields,
      "isEmptyObjectAccept": false,
      "dataSchema": {
        "name": "username",
        "email": "email",
        "password": "password",
        "contact": "mobile",
        "address": "address",
        "type": "clienttype",
        "geopoint": "geopoint"
      }
    };
    apiInputDataValidation.validateData(inputDataDetails, ctx, function (error, data) {
      if (error) {
        next(error);
      }
      else {
        apiMongoUtilities.getNextSequenceValue(
          apiMongoUtilities.clientMongoConnection,
          apiMongoUtilities.clientCollectionName,
          apiMongoUtilities.clientCounterModelName,
          function (err, seqValue) {
            if (err) {
              errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
              return next(errorObject);
            }
            else {
              data.id = seqValue;
              data.email = baseUtils.toStrTrimLowercase(data.email);
              data.createdAt = utilities.getCurrentTimeLong();
              data.geopoint = new loopback.GeoPoint(data.geopoint);
              ctx.args.data = data;
              next();
            }
          });
      }
    });
  });
  Client.register = function (data, cb) {

    var apiRequestDetails = data.apiRequestDetails;
    var errorObject = {};
    delete data.apiRequestDetails;
    logger.log("registration details ", JSON.stringify(data));
    Client.create(data, function (err, userInstance) {
      if (!err) {
        message.registrationSuccess.message = 'User Successfully Registered';
        message.registrationSuccess.data = userInstance;
        logger.log(JSON.stringify(message.registrationSuccess));
        cb(null, message.registrationSuccess);
      }
      else {
        if (err.statusCode === 422) {
          errorObject = errorHandler.logError("email address already exists", "DATA_ALREADY_EXIST", apiRequestDetails);
          cb(errorObject);
        }
        else {
          errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
          cb(errorObject);
        }
      }
    });

  };

  // user Login
  Client.remoteMethod('userLogin', {
    http: {path: '/login', verb: 'post'},
    accepts: {
      arg: 'data', type: 'object', http: {'source': 'body'}
    },
    returns: {
      arg: 'login', type: 'object', root: true
    }
  });
  Client.beforeRemote('userLogin', function (ctx, unused, next) {

    var errorObject = {};
    var inputDataDetails = {
      "type": "object",
      "apiName": "api/client/login",
      "requiredFields": clientLoginRequiredFields,
      "optionalFields": clientLoginOptionFields,
      "isEmptyObjectAccept": false,
      "dataSchema": {
        "email": "email",
        "password": "password"
      }
    };
    apiInputDataValidation.validateData(inputDataDetails, ctx, function (error, data) {
      if (error) {
        next(error);
      }
      else {
        data.email = baseUtils.toStrTrimLowercase(data.email);
        ctx.args.data = data;
        next();
      }
    });

  });
  Client.userLogin = function (data, cb) {

    var apiRequestDetails = data.apiRequestDetails;
    var errorObject = {};
    delete data.apiRequestDetails;

    var AccessTokenModel = app.models.AccessToken;

    Client.findOne({
      where: {
        email: data.email
      }, "fields": ["id","type","name"]
    }, function (err, doc) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
        cb(errorObject);
      }
      else if (doc) {
        console.log("client details "+JSON.stringify(doc));
        userLogin(Client, data, doc, apiRequestDetails, cb)
      }
      else {
        errorObject = errorHandler.logError(message.loginError, "", apiRequestDetails);
        cb(errorObject);
      }
    });
  };

  Client.remoteMethod('generateAccessToken', {
    http: {path: '/generate/token', verb: 'get'},
    accepts: {
      arg: 'token', type: 'string', http: {'source': 'query'}
    },
    returns: {
      arg: 'login', type: 'object', root: true
    }
  });
  Client.beforeRemote('generateAccessToken', function (ctx, unused, next) {

    var validationResult;
    var errorObject = {};
    var apiRequestDetails = utilities.getApiRequestDetails("/api/client/generate/token", ctx);
    apiRequestDetails.data = ctx.args.data;

    validationResult = baseUtils.validateDataWithFunction(ctx.args.token, baseUtils.isStringProperty, "token", "access token");
    if (!validationResult.isValid) {
      errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
      return next(errorObject);
    }
    else {
      next();
    }
  });
  Client.generateAccessToken = function (token, cb) {

    var errorObject = {};
    var AccessTokenModel = app.models.AccessToken;

    AccessTokenModel.findOne({
      where: {
        _id: token
      }, "fields": ["created","userId"]
    }, function (err, doc) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
        cb(errorObject);
      }
      else if (doc) {
        console.log("client details "+JSON.stringify(doc));
        cb(null,null);
      }
      else {
        errorObject = errorHandler.logError(message.dataNotFoundError, "", "");
        cb(errorObject);
      }
    });
  };


  function userLogin(ClientModel, data, userDoc, apiRequestDetails, cb) {
    var errorObject = {};
    ClientModel.login({
      email: data.email,
      password: data.password,
      ttl: ONE_DAY
    }, function (err, token) {
      if (err) {
        if (err.message === "login failed") {
          errorObject = errorHandler.logError(message.loginError, "", apiRequestDetails);
          cb(errorObject);
        }
        else {
          errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
          cb(errorObject);
        }
      }
      else {
        var logMessage = "LOGIN_SUCCESS :: cId: " + token.userId + ", accessToken: " + token.id;
        errorHandler.logMessageWithApiRequestInformation(logMessage, apiRequestDetails);
        cb(null, {id: token.id, userId: token.userId, type:userDoc.type, name:userDoc.name});
      }
    });
  }
};
