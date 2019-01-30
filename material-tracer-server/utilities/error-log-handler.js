var message = require('./Messages.json');
const logger = require('tracer').colorConsole({
  format: '{{timestamp}} [{{title}}] {{message}} (in {{path}}:{{line}})',
  dateformat: 'dd-mm-yyyy HH:MM:ss TT'
});
var errorObject = {};
var errorHandler = {};

function logError(errorMessage, errorType, apiRequestDetails) {
  if (apiRequestDetails) {
    logApiRequestInformation(apiRequestDetails);
  }
  if (errorType === "INTERNAL_ERROR") {
    logger.error(JSON.stringify(errorMessage));
    errorObject = message.serverError;
  }
  else if (errorType === "INVALID_REQUEST") {
    errorObject = message.invalidRequest;
    errorObject.message = errorMessage;
    logger.error(JSON.stringify(errorObject));
  }
  else if (errorType === "DATA_NOT_FOUND") {
    errorObject = message.dataNotFoundError;
    errorObject.message = errorMessage;
    logger.error(JSON.stringify(errorObject));
  }
  else if (errorType === "VALIDATION_ERROR") {
    errorObject = message.validationError;
    errorObject.message = errorMessage;
    logger.error(JSON.stringify(errorObject));
  }
  else if (errorType === "DATA_ALREADY_EXIST") {
    errorObject = message.dataAlreadyExistError;
    errorObject.message = errorMessage;
    logger.error(JSON.stringify(errorObject));
  }
  else {
    logger.error(JSON.stringify(errorMessage));
    errorObject = errorMessage;
  }
  return errorObject;
}

function logApiRequestInformation(apiRequestDetails) {
  apiRequestDetails.clientId = apiRequestDetails.clientId ? apiRequestDetails.clientId : 0;
  apiRequestDetails.data = (apiRequestDetails.data !== undefined && apiRequestDetails.data !== null && apiRequestDetails.data !== "") ? ("\n\t\tINPUT_DATA :: " + JSON.stringify(apiRequestDetails.data)) : "";
  var logInformation = apiRequestDetails.clientId + " :: " + apiRequestDetails.remoteAddress + ":" + apiRequestDetails.remotePort + " :: " + apiRequestDetails.apiUrl + apiRequestDetails.data;
  logger.log(logInformation);
}

function logMessageWithApiRequestInformation(message, apiRequestDetails) {
  logApiRequestInformation(apiRequestDetails);
  logger.log(message);
}

function logMessage(message) {
  logger.log(message);
}

errorHandler.logApiRequestInformation = logApiRequestInformation;
errorHandler.logMessageWithApiRequestInformation = logMessageWithApiRequestInformation;
errorHandler.logError = logError;
errorHandler.logMessage = logMessage;
module.exports = errorHandler;
