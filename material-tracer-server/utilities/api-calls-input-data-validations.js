var apiCallsInputDataValidation = {};
var baseUtils = require('./base-utilities');
var utilities = require('./utilities.js');
var errorHandler = require('./error-log-handler');

var validationFunctions = {
  "username":baseUtils.isUserName,
  "email":baseUtils.isEmail,
  "password": baseUtils.isPassword,
  "mobile": baseUtils.isMobileNumber,
  "address": baseUtils.isAddress,
  "geopoint":baseUtils.isGeopoint,
  "clienttype":baseUtils.isClientType,
  "positive_integer_no_pre_zero": baseUtils.isPositiveIntNoPreZero,
  "string": baseUtils.isStringProperty,
  "integer":baseUtils.isInteger,
  "billing_of_material_document":baseUtils.isBillingOfMaterialDocument
};

var validationMessages = {
  "username":"username",
  "email":"email",
  "password":"length greater than or equal to 6, contains alpha,numerical,special characters(@,#,$,%)",
  "mobile": "mobile number",
  "address": "address",
  "geopoint":"geopoint as [latitude, longitude]",
  "positive_integer_no_pre_zero": "positive integer with no pre zero",
  "string": "string",
  "integer":"integer",
  "billing_of_material_document":"billing of material details"
};

function validateData(inputDataDetails, ctx, cb) {
  if (inputDataDetails.type === "object") {
    var validationResult;
    var errorObject = {};
    var apiRequestDetails = utilities.getApiRequestDetails(inputDataDetails.apiName, ctx);
    apiRequestDetails.data = Object.assign({},ctx.args.data);

    validationResult = baseUtils.validateDataWithFunction(ctx.args.data, baseUtils.isStrictObject, "data", "object");
    if (!validationResult.isValid) {
      errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
      return cb(errorObject);
    }
    if (!inputDataDetails.isEmptyObjectAccept) {
      if (Object.keys(ctx.args.data).length === 0) {
        errorObject = errorHandler.logError("data object should not be empty", "VALIDATION_ERROR", apiRequestDetails);
        return cb(errorObject);
      }
    }
    if (inputDataDetails.requiredFields.concat(inputDataDetails.optionalFields).length !== 0) {
      if (!baseUtils.validateObjectDataWithProperties(inputDataDetails.requiredFields.concat(inputDataDetails.optionalFields), ctx.args.data)) {
        errorObject = errorHandler.logError("data object should contain only " + inputDataDetails.requiredFields.concat(inputDataDetails.optionalFields), "VALIDATION_ERROR", apiRequestDetails);
        return cb(errorObject);
      }
    }
    if (inputDataDetails.requiredFields.length !== 0) {
      if (!baseUtils.isObjectContainsFields(inputDataDetails.requiredFields, ctx.args.data)) {
        errorObject = errorHandler.logError("data object should contain " + inputDataDetails.requiredFields, "VALIDATION_ERROR", apiRequestDetails);
        return cb(errorObject);
      }
      for (var i = 0; i < inputDataDetails.requiredFields.length; i++) {
        validationResult = baseUtils.validateDataWithFunction(
          ctx.args.data[inputDataDetails.requiredFields[i]],
          validationFunctions[inputDataDetails.dataSchema[inputDataDetails.requiredFields[i]]],
          inputDataDetails.requiredFields[i],
          validationMessages[inputDataDetails.dataSchema[inputDataDetails.requiredFields[i]]]
        );
        if (!validationResult.isValid) {
          errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
          return cb(errorObject);
        }
      }
    }
    if (inputDataDetails.optionalFields.length !== 0) {
      for (var j = 0; j < inputDataDetails.optionalFields.length; j++) {
        if (ctx.args.data.hasOwnProperty(inputDataDetails.optionalFields[j])) {
          validationResult = baseUtils.validateDataWithFunction(
            ctx.args.data[inputDataDetails.optionalFields[j]],
            validationFunctions[inputDataDetails.dataSchema[inputDataDetails.optionalFields[j]]],
            inputDataDetails.optionalFields[j],
            validationMessages[inputDataDetails.dataSchema[inputDataDetails.optionalFields[j]]]
          );
          if (!validationResult.isValid) {
            errorObject = errorHandler.logError(validationResult.errorMessage, "VALIDATION_ERROR", apiRequestDetails);
            return cb(errorObject);
          }
        }
      }
    }
    ctx.args.data.apiRequestDetails = apiRequestDetails;
    return cb(null, ctx.args.data);
  }
}

apiCallsInputDataValidation.validateData = validateData;

module.exports = apiCallsInputDataValidation;
