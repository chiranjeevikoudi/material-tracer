'use strict';

var baseUtils = require('../../utilities/base-utilities');
var message = require('../../utilities/Messages.json');
var utilities = require('../../utilities/utilities.js');
var errorHandler = require('../../utilities/error-log-handler');
var apiMongoUtilities = require("../../utilities/api-mongo-utilities");
var apiInputDataValidation = require("../../utilities/api-calls-input-data-validations");
var requestStatus = {
  "0": "Intiated",
  "1": "Request accepted by supplier",
  "2": "BOM submitted  by supplier",
  "3": "Quote approved  by manufacturer",
  "-1": "Request rejected  by supplier",
  "-2": "Quote rejected  by manufacturer"
};
var updateStatusDetails = {
  allowedValues: [-1, -2, 1, 3],
  statusMap: {
    "-1": {
      findStatus: 0,
      userType: "supplier"
    },
    "-2": {
      findStatus: 2,
      userType: "manufacturer"
    },
    "1": {
      findStatus: 0,
      userType: "supplier"
    },
    "2": {
      findStatus: 1,
      userType: "supplier"
    },
    "3": {
      findStatus: 2,
      userType: "manufacturer"
    }
  }
};

var logger = require("tracer").colorConsole({
  format: "{{timestamp}} [{{title}}] {{message}} (in {{file}}:{{line}})",
  dateformat: "dd-mm-yyyy HH:MM:ss TT"
});

var requestRequiredFields = ["material_name", "material_type", "manufacturer_email", "supplier_email", "supplier_contact", "supplier_name"];
var requestOptionFields = [];

var requestStatusUpdateRequiredFields = ["requestId", "status"];
var requestStatusUpdateOptionFields = [];
// var requestStatusUpdateOptionFields = [ "attachment"];

var requestAttachmentFileNameUpdateRequiredFields = ["requestId", "attachment"];
var requestAttachmentFileNameUpdateOptionFields = [];

var requestBillingOfMaterialDocumentUpdateRequiredFields = ["requestId", "bom"];
var requestBillingOfMaterialDocumentUpdateOptionFields = [];

module.exports = function (Request) {

  Request.remoteMethod('postRequest', {
    http: {path: '/', verb: 'post'},
    accepts: {
      arg: 'data', type: 'object', http: {'source': 'body'}
    },
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('postRequest', function (ctx, unused, next) {

    var errorObject = {};
    var inputDataDetails = {
      "type": "object",
      "apiName": "api/requests/",
      "requiredFields": requestRequiredFields,
      "optionalFields": requestOptionFields,
      "isEmptyObjectAccept": false,
      "dataSchema": {
        "material_name": "string",
        "material_type": "string",
        "manufacturer_email": "email",
        "supplier_email": "email",
        "supplier_contact": "mobile",
        "supplier_name": "username"
        // "attachment": "string",
      }
    };
    apiInputDataValidation.validateData(inputDataDetails, ctx, function (error, data) {
      if (error) {
        next(error);
      }
      else {
        data.manufacturer_email = baseUtils.toStrTrimLowercase(data.manufacturer_email);
        data.supplier_email = baseUtils.toStrTrimLowercase(data.supplier_email);
        apiMongoUtilities.getNextSequenceValue(
          apiMongoUtilities.clientMongoConnection,
          apiMongoUtilities.requestCollectionName,
          apiMongoUtilities.clientCounterModelName,
          function (err, seqValue) {
            if (err) {
              errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
              return next(errorObject);
            }
            else {
              var ClientModel = Request.app.models.Client;
              ClientModel.findOne({
                where: {
                  email: data.supplier_email
                }, "fields": ["id"]
              }, function (err, doc) {
                if (err) {
                  errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
                  next(errorObject);
                }
                else if (doc) {
                  data.id = seqValue;
                  data.createdAt = utilities.getCurrentTimeLong();
                  data.trail = [[0, data.createdAt]];
                  data.manufacturer_id = data.apiRequestDetails.clientId;
                  data.supplier_id = doc["id"];
                  data.status = 0;
                  ctx.args.data = data;
                  next();
                }
                else {
                  errorObject = errorHandler.logError("no supplier found with that email " + data.supplier_email, "DATA_NOT_FOUND", "");
                  next(errorObject);
                }
              });
            }
          });
      }
    });
  });
  Request.postRequest = function (data, cb) {

    var apiRequestDetails = data.apiRequestDetails;
    var errorObject = {};
    delete data.apiRequestDetails;
    // logger.log("request details ", JSON.stringify(data));
    Request.create(data, function (err, requestInstance) {
      if (!err) {
        message.requestSubmissionSuccess.data = {request_id: requestInstance.id};
        logger.log(JSON.stringify(message.requestSubmissionSuccess));
        cb(null, message.requestSubmissionSuccess);
      }
      else {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
        cb(errorObject);
      }
    });

  };

  Request.remoteMethod('getRequests', {
    http: {path: '/', verb: 'get'},
    accepts: [
      {
        arg: 'userId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userType', type: 'string', http: {'source': 'query'}
      }
    ],
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('getRequests', function (ctx, unused, next) {

    var apiRequestDetails = utilities.getApiRequestDetails("/api/requests/", ctx);
    apiRequestDetails.data = {
      userId: ctx.args.userId
    };
    var errorObject = {};
    ctx.args.userId = apiRequestDetails.clientId;
    var ClientModel = Request.app.models.Client;
    ClientModel.findOne({
      where: {
        _id: ctx.args.userId
      }, "fields": ["id", "type"]
    }, function (err, doc) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
        next(errorObject);
      }
      else if (doc) {
        ctx.args.userType = doc["type"];
        next();
      }
      else {
        errorObject = errorHandler.logError("some internal error occurred", "INTERNAL_ERROR", "");
        next(errorObject);
      }
    });
  });
  Request.getRequests = function (userId, userType, cb) {

    var errorObject = {};
    var whereFilter = {};
    if (userType === "manufacturer") {
      whereFilter["manufacturer_id"] = userId;
    }
    else {
      whereFilter["supplier_id"] = userId;
    }
    Request.find({
      where: whereFilter,
      fields: ["id", "material_name", "material_type", "manufacturer_email", "supplier_email", "supplier_contact", "status", "supplier_name"],
      order: 'status ASC'
    }, function (err, requestDocs) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
        cb(errorObject);
      }
      else if (requestDocs && requestDocs.length !== 0) {
        for (var requestIndex = 0; requestIndex < requestDocs.length; requestIndex++) {
          requestDocs[requestIndex]["status"] = requestStatus[requestDocs[requestIndex]["status"]];
        }
        cb(null, requestDocs);
      }
      else {
        cb(null, requestDocs);
      }
    });
  };

  Request.remoteMethod('getRequestById', {
    http: {path: '/byId', verb: 'get'},
    accepts: [
      {
        arg: 'requestId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userType', type: 'string', http: {'source': 'query'}
      }
    ],
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('getRequestById', function (ctx, unused, next) {

    var apiRequestDetails = utilities.getApiRequestDetails("/api/requests/byId", ctx);
    apiRequestDetails.data = {
      requestId: ctx.args.requestId
    };
    var validationResult;
    var errorObject = {};
    validationResult = baseUtils.validateDataWithFunction(ctx.args.requestId, baseUtils.isPositiveIntNoPreZero, "requestId", "request id");
    if (!validationResult.isValid) {
      errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
      return next(errorObject);
    }
    else {
      ctx.args.userId = apiRequestDetails.clientId;
      var ClientModel = Request.app.models.Client;
      ClientModel.findOne({
        where: {
          _id: ctx.args.userId
        }, "fields": ["id", "type"]
      }, function (err, doc) {
        if (err) {
          errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
          next(errorObject);
        }
        else if (doc) {
          ctx.args.userType = doc["type"];
          next();
        }
        else {
          errorObject = errorHandler.logError("some internal error occurred", "INTERNAL_ERROR", "");
          next(errorObject);
        }
      });
    }
  });
  Request.getRequestById = function (requestId, userId, userType, cb) {

    var errorObject = {};
    var whereFilter = {
      _id: requestId
    };
    if (userType === "manufacturer") {
      whereFilter["manufacturer_id"] = userId;
    }
    else {
      whereFilter["supplier_id"] = userId;
    }
    Request.findOne({
      where: whereFilter
    }, function (err, requestDoc) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
        cb(errorObject);
      }
      else {
        if (requestDoc) {
          requestDoc["status"] = requestStatus[requestDoc["status"]];
        }
        cb(null, requestDoc);
      }
    });
  };

  Request.remoteMethod('updateRequestStatus', {
    http: {path: '/update/status', verb: 'post'},
    accepts: {
      arg: 'data', type: 'object', http: {'source': 'body'}
    },
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('updateRequestStatus', function (ctx, unused, next) {
    var errorObject = {};
    var inputDataDetails = {
      "type": "object",
      "apiName": "/api/requests/update/status",
      "requiredFields": requestStatusUpdateRequiredFields,
      "optionalFields": requestStatusUpdateOptionFields,
      "isEmptyObjectAccept": false,
      "dataSchema": {
        "requestId": "positive_integer_no_pre_zero",
        "status": "integer"
      }
    };
    apiInputDataValidation.validateData(inputDataDetails, ctx, function (error, data) {
      if (error) {
        next(error);
      }
      else {
        console.log("userId", data.userId);
        data.userId = data.apiRequestDetails.clientId;
        if (updateStatusDetails.allowedValues.indexOf(data.status) > -1) {
          var ClientModel = Request.app.models.Client;
          ClientModel.findOne({
            where: {
              _id: data.userId
            }, "fields": ["id", "type"]
          }, function (err, doc) {
            if (err) {
              errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
              next(errorObject);
            }
            else if (doc) {
              if (updateStatusDetails.statusMap[data.status]["userType"] === doc["type"]) {
                data.where = {
                  _id: data.requestId,
                  status: updateStatusDetails.statusMap[data.status]["findStatus"]
                };
                data.where[doc["type"] + "_id"] = data.userId;
                data.update = {
                  $set: {
                    status: data.status
                  },
                  $addToSet: {
                    trail: [data.status, utilities.getCurrentTimeLong()]
                  }
                };
                next();
              }
              else {
                errorObject = errorHandler.logError("request is invalid user type not"+doc["type"], "INVALID_REQUEST", "");
                next(errorObject);
              }
            }
            else {
              errorObject = errorHandler.logError("request is invalid user id not found", "INVALID_REQUEST", "");
              next(errorObject);
            }
          });
        }
        else {
          errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
          next(errorObject);
        }
      }
    });
  });
  Request.updateRequestStatus = function (data, cb) {
    var apiRequestDetails = data.apiRequestDetails;
    var errorObject = {};
    delete data.apiRequestDetails;
    logger.log("request details ", JSON.stringify(data));
    apiMongoUtilities.updateRequestStatus(data.where, data.update, function (err, updateResult) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
        cb(errorObject);
      }
      else if (updateResult && updateResult.modifiedCount && updateResult.modifiedCount > 0) {
        cb(null, message.requestStatusUpdateSuccess);
      }
      else {
        errorObject = errorHandler.logError("request is invalid not updated", "INVALID_REQUEST", "");
        cb(errorObject);
      }
    });
  };

  Request.remoteMethod('updateAttachmentFileName', {
    http: {path: '/update/attachment', verb: 'post'},
    accepts: {
      arg: 'data', type: 'object', http: {'source': 'body'}
    },
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('updateAttachmentFileName', function (ctx, unused, next) {
    var errorObject = {};
    var inputDataDetails = {
      "type": "object",
      "apiName": "/api/requests/update/attachment",
      "requiredFields": requestAttachmentFileNameUpdateRequiredFields,
      "optionalFields": requestAttachmentFileNameUpdateOptionFields,
      "isEmptyObjectAccept": false,
      "dataSchema": {
        "requestId": "positive_integer_no_pre_zero",
        "attachment": "string"
      }
    };
    apiInputDataValidation.validateData(inputDataDetails, ctx, function (error, data) {
      if (error) {
        next(error);
      }
      else {
        console.log("userId", data.userId);
        data.userId = data.apiRequestDetails.clientId;
        var ClientModel = Request.app.models.Client;
        ClientModel.findOne({
          where: {
            _id: data.userId
          }, "fields": ["id", "type"]
        }, function (err, doc) {
          if (err) {
            errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
            next(errorObject);
          }
          else if (doc) {
            if (doc["type"] === "manufacturer") {
              data.where = {
                _id: data.requestId,
                attachment:null
              };
              data.where[doc["type"] + "_id"] = data.userId;
              data.update = {
                $set: {
                  attachment: data.attachment
                }
              };
              next();
            }
            else {
              errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
              next(errorObject);
            }
          }
          else {
            errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
            next(errorObject);
          }
        });
      }
    });
  });
  Request.updateAttachmentFileName = function (data, cb) {
    var apiRequestDetails = data.apiRequestDetails;
    var errorObject = {};
    delete data.apiRequestDetails;
    logger.log("request details ", JSON.stringify(data));
    apiMongoUtilities.updateRequestAttachmentName(data.where, data.update, function (err, updateResult) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
        cb(errorObject);
      }
      else if (updateResult && updateResult.modifiedCount && updateResult.modifiedCount > 0) {
        cb(null, message.requestAttachmentNameUpdateSuccess);
      }
      else {
        errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
        cb(errorObject);
      }
    });
  };

  Request.remoteMethod('postBOMDocument', {
    http: {path: '/bom/document', verb: 'post'},
    accepts: {
      arg: 'data', type: 'object', http: {'source': 'body'}
    },
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('postBOMDocument', function (ctx, unused, next) {
    var errorObject = {};
    var inputDataDetails = {
      "type": "object",
      "apiName": "/api/requests/update/status",
      "requiredFields": requestBillingOfMaterialDocumentUpdateRequiredFields,
      "optionalFields": requestBillingOfMaterialDocumentUpdateOptionFields,
      "isEmptyObjectAccept": false,
      "dataSchema": {
        "requestId": "positive_integer_no_pre_zero",
        "bom": "billing_of_material_document"
      }
    };
    apiInputDataValidation.validateData(inputDataDetails, ctx, function (error, data) {
      if (error) {
        next(error);
      }
      else {
        console.log("userId", data.userId);
        data.userId = data.apiRequestDetails.clientId;
        var ClientModel = Request.app.models.Client;
        ClientModel.findOne({
          where: {
            _id: data.userId
          }, "fields": ["id", "type"]
        }, function (err, doc) {
          if (err) {
            errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
            next(errorObject);
          }
          else if (doc) {
            if (doc["type"] === "supplier") {
              data.where = {
                _id: data.requestId,
                status: 1
              };
              data.where[doc["type"] + "_id"] = data.userId;
              data.update = {
                $set: {
                  status: 2,
                  bom:data.bom
                },
                $addToSet: {
                  trail: [2, utilities.getCurrentTimeLong()]
                }
              };
              next();
            }
            else {
              errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
              next(errorObject);
            }
          }
          else {
            errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
            next(errorObject);
          }
        });
      }
    });
  });
  Request.postBOMDocument = function (data, cb) {
    var apiRequestDetails = data.apiRequestDetails;
    var errorObject = {};
    delete data.apiRequestDetails;
    logger.log("request details ", JSON.stringify(data));
    apiMongoUtilities.updateBillingOfMaterialDocument(data.where, data.update, function (err, updateResult) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", apiRequestDetails);
        cb(errorObject);
      }
      else if (updateResult && updateResult.modifiedCount && updateResult.modifiedCount > 0) {
        cb(null, message.requestBOMDocumentUpdateSuccess);
      }
      else {
        errorObject = errorHandler.logError("request is invalid", "INVALID_REQUEST", "");
        cb(errorObject);
      }
    });
  };

  Request.remoteMethod('getBOMDocumentRequestById', {
    http: {path: '/bom/byId', verb: 'get'},
    accepts: [
      {
        arg: 'requestId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userType', type: 'string', http: {'source': 'query'}
      }
    ],
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('getBOMDocumentRequestById', function (ctx, unused, next) {

    var apiRequestDetails = utilities.getApiRequestDetails("/api/requests/bom/byId", ctx);
    apiRequestDetails.data = {
      requestId: ctx.args.requestId
    };
    var validationResult;
    var errorObject = {};
    validationResult = baseUtils.validateDataWithFunction(ctx.args.requestId, baseUtils.isPositiveIntNoPreZero, "requestId", "request id");
    if (!validationResult.isValid) {
      errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
      return next(errorObject);
    }
    else {
      ctx.args.userId = apiRequestDetails.clientId;
      var ClientModel = Request.app.models.Client;
      ClientModel.findOne({
        where: {
          _id: ctx.args.userId
        }, "fields": ["id", "type"]
      }, function (err, doc) {
        if (err) {
          errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
          next(errorObject);
        }
        else if (doc) {
          ctx.args.userType = doc["type"];
          next();
        }
        else {
          errorObject = errorHandler.logError("some internal error occurred", "INTERNAL_ERROR", "");
          next(errorObject);
        }
      });
    }
  });
  Request.getBOMDocumentRequestById = function (requestId, userId, userType, cb) {

    var errorObject = {};
    var whereFilter = {
      _id: requestId,
      bom: {$ne:null}
    };
    if (userType === "manufacturer") {
      whereFilter["manufacturer_id"] = userId;
    }
    else {
      whereFilter["supplier_id"] = userId;
    }
    Request.findOne({
      where: whereFilter,
      "fields": ["id", "bom", "status"]
    }, function (err, requestDoc) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
        cb(errorObject);
      }
      else {
        cb(null, requestDoc);
      }
    });
  };

  Request.remoteMethod('getRequestGraphMapGeoPointsById', {
    http: {path: '/graph/map/geopoints/byId', verb: 'get'},
    accepts: [
      {
        arg: 'requestId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userId', type: 'number', http: {'source': 'query'}
      },
      {
        arg: 'userType', type: 'string', http: {'source': 'query'}
      }
    ],
    returns: {
      arg: 'response', type: 'object', root: true
    }
  });
  Request.beforeRemote('getRequestGraphMapGeoPointsById', function (ctx, unused, next) {

    var apiRequestDetails = utilities.getApiRequestDetails("/api/graph/map/geopoints/byId", ctx);
    apiRequestDetails.data = {
      requestId: ctx.args.requestId
    };
    var validationResult;
    var errorObject = {};
    validationResult = baseUtils.validateDataWithFunction(ctx.args.requestId, baseUtils.isPositiveIntNoPreZero, "requestId", "request id");
    if (!validationResult.isValid) {
      errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
      return next(errorObject);
    }
    else {
      ctx.args.userId = apiRequestDetails.clientId;
      var ClientModel = Request.app.models.Client;
      ClientModel.findOne({
        where: {
          _id: ctx.args.userId
        }, "fields": ["id", "type"]
      }, function (err, doc) {
        if (err) {
          errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
          next(errorObject);
        }
        else if (doc) {
          ctx.args.userType = doc["type"];
          next();
        }
        else {
          errorObject = errorHandler.logError("some internal error occurred", "INTERNAL_ERROR", "");
          next(errorObject);
        }
      });
    }
  });
  Request.getRequestGraphMapGeoPointsById = function (requestId, userId, userType, cb) {

    var errorObject = {};
    var whereFilter = {
      _id: requestId
    };
    if (userType === "manufacturer") {
      whereFilter["manufacturer_id"] = userId;
    }
    else {
      whereFilter["supplier_id"] = userId;
    }
    Request.findOne({
      where: whereFilter
    }, function (err, requestDoc) {
      if (err) {
        errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
        cb(errorObject);
      }
      else {
        if (requestDoc) {
          var ClientModel = Request.app.models.Client;
          ClientModel.find({
            where: {
              _id: {$in:[requestDoc["manufacturer_id"],requestDoc["supplier_id"]]}
            }, "fields": ["id", "geopoint"]
          }, function (err, clientGeoPoints) {
            if (err) {
              errorObject = errorHandler.logError(err, "INTERNAL_ERROR", "");
              cb(errorObject);
            }
            else if (clientGeoPoints && clientGeoPoints.length !== 0) {
              var graphMapGeoPoints = [];
              for(var index=0;index<clientGeoPoints.length;index++){
                graphMapGeoPoints.push([clientGeoPoints[index]["geopoint"]["lat"],clientGeoPoints[index]["geopoint"]["lng"]]);
              }
              if(requestDoc.bom && requestDoc.bom.supplier_details && requestDoc.bom.supplier_details.length !== 0){
                for(var supplerIndex=0;supplerIndex<requestDoc.bom.supplier_details.length;supplerIndex++){
                  if(requestDoc.bom.supplier_details[supplerIndex]["supplier_geopoint"]){
                    graphMapGeoPoints.push(requestDoc.bom.supplier_details[supplerIndex]["supplier_geopoint"]);
                  }
                  if(requestDoc.bom.supplier_details[supplerIndex]["dependant_supplier_geopoint"]){
                    graphMapGeoPoints.push(requestDoc.bom.supplier_details[supplerIndex]["dependant_supplier_geopoint"]);
                  }
                }
              }
              cb(null,graphMapGeoPoints);
            }
            else {
              cb(null,null);
            }
          });
        }
        else{
          cb(null,null);
        }
      }
    });
  };

};
