var regularEx = require('./schema/regular-expressions');
var utilities = {};

var billingOfMaterialDocumentSupplierDetailsRequiredFields = ["part_name","supplier_name","supplier_address","supplier_geopoint"];
var billingOfMaterialDocumentSupplierDetailsOptionalFields = ["dependant_supplier_name","dependant_supplier_address","dependant_supplier_geopoint"];
var billingOfMaterialDocumentSupplierDetailsSchema = {
  "part_name": "string",
  "supplier_name": "string",
  "supplier_address": "string",
  "supplier_geopoint": "geopoint",
  "dependant_supplier_name": "string",
  "dependant_supplier_address": "string",
  "dependant_supplier_geopoint": "geopoint"
};
var validationFunctions = {
  "username": isUserName,
  "email": isEmail,
  "password": isPassword,
  "mobile": isMobileNumber,
  "address": isAddress,
  "geopoint": isGeopoint,
  "clienttype": isClientType,
  "positive_integer_no_pre_zero": isPositiveIntNoPreZero,
  "string": isStringProperty,
  "integer": isInteger,
  "array_of_bom_document_supllier_details":isArrayOfSupplierDetailsBillingOfMeterialDocument
};

var billingOfMaterialDocumentRequiredFields = ["amount","supplier_details"];
var billingOfMaterialDocumentOptionalFields = [];
var billingOfMaterialDocumentSchema = {
  "amount": "positive_integer_no_pre_zero",
  "supplier_details": "array_of_bom_document_supllier_details"
};


function isAlphaString(param) {
  return (testStringRegex(param, regularEx.alphaString));
}

function testStringRegex(param, regEx) {
  if (isStringProperty(param)) {
    param = toStrTrimLowercase(param);
    return (regEx.test(param));
  }
  return false;
}

function testNumberRegex(param, regEx) {
  if (isNumber(param)) {
    return (regEx.test(param));
  }
  return false;
}

function isStringProperty(param) {
  return ((param !== undefined && param !== null) && typeof param === 'string' && toStrTrimLowercase(param) !== "");
}

function toStrTrimLowercase(param) {
  var newParam = param.toString().trim().toLowerCase().split(" ");
  param = "";
  for (var i = 0; i < newParam.length; i++) {
    if (newParam[i].trim() !== "") {
      param = param + newParam[i].trim() + " ";
    }
  }
  newParam = null;
  return (param.trim());
}

function isRegexContain(param, regexArray) {
  for (var i = 0; i < regexArray.length; i++) {
    if (regexArray[i].test(param)) {
      return true;
    }
  }
  return false;
}

function isArray(param) {
  return ((param !== undefined && param !== null) && Array.isArray(param));
}

function isArrayEmpty(param) {
  return !((param !== undefined && param !== null) && Array.isArray(param) && param.length !== 0);
}

function isNumber(param) {
  return ((param !== undefined && param !== null) && typeof param === 'number');
}

function isArrayOfNumbers(param) {
  if (isArray(param) && param.length !== 0) {
    for (var property = 0; property < param.length; property++) {
      if (!isNumber(param[property])) {
        return false;
      }
    }
  }
  else{
    return false;
  }
  return true;
}


function isLatitude(param) {
  return (testNumberRegex(param, regularEx.latitude));
}

function isLongitude (param) {
  return (testNumberRegex(param, regularEx.longitude));
}




function isUserName(param) {
  return (isAlphaString(param));
}

function isEmail(param) {
  return testStringRegex(param, regularEx.email);
}

function isPassword(param) {
  return(testStringRegex(param, regularEx.password) && (param.length >=6 && param.length <=50));
}

function isMobileNumber(param) {
  if (isStringProperty(param)) {
    param = toStrTrimLowercase(param);
    return (isRegexContain(param, regularEx.mobile));
  }
  return false;
}

function isAddress(param) {
  return(isStringProperty(param) && (param.length >=5 && param.length <=100));
}

function isGeopoint(param) {
/*  console.log("geo point is array",isArrayOfNumbers(param) );
  console.log("geo point length of array",param.length );
  console.log("geo point is latitude",isLatitude(param[0]) );
  console.log("geo point is longitude",isLongitude(param[1]) );
  console.log(param[0],typeof param[0])
  console.log(param[1],typeof param[1])*/
  return(isArrayOfNumbers(param) && (param.length === 2) && isLatitude(param[0]) && isLongitude(param[1]));
}

function isClientType(param) {
  return(isAlphaString(param) && (param === "manufacturer" ||param === "supplier"));

}

function validateDataWithFunction(data, validateFunction, dataName, dataType) {
  var result = {"isValid": false};
  if (data === undefined || data === null || data === "") {
    result.errorMessage = dataName + " is invalid. It should not be null,undefined and empty string";
  }
  else if (!validateFunction(data)) {
    result.errorMessage = dataName + " is invalid. It must be " + dataType;
  }
  else {
    result.isValid = true;
  }
  return result;
}

function isStrictObject(param) {
  return ((param !== undefined && param !== null) && typeof param === 'object' && !Array.isArray(param));
}

function validateObjectDataWithProperties(properties, data) {
  var validDetails = [];
  for (var property = 0; property < properties.length; property++) {
    if (data.hasOwnProperty(properties[property])) {
      validDetails.push(properties[property]);
    }
  }
  return (validDetails.length === Object.keys(data).length);
}

function isObjectContainsFields(fields, dataObject) {
  var validDetails = [];
  for (var property = 0; property < fields.length; property++) {
    if (dataObject.hasOwnProperty(fields[property])) {
      validDetails.push(fields[property]);
    }
  }
  return (validDetails.length === fields.length);
}

function isPositiveIntNoPreZero(param) {
  return ((param !== undefined && param !== null) && typeof param === 'number' && regularEx.positiveIntegerNoPreZero.test(param));
}

function isInteger(param) {
  return ((param !== undefined && param !== null) && typeof param === 'number' && regularEx.integer.test(param));
}

function isSupplierDetailsOfBillingOfMeterialDocument(param) {
  if(isStrictObject(param) && (Object.keys(param).length >= billingOfMaterialDocumentSupplierDetailsRequiredFields.length) && validateObjectDataWithProperties(billingOfMaterialDocumentSupplierDetailsRequiredFields.concat(billingOfMaterialDocumentSupplierDetailsOptionalFields), param)){
    if (!isObjectContainsFields(billingOfMaterialDocumentSupplierDetailsRequiredFields, param)) {
      return false;
    }
    for(var property in param){
      if(!validationFunctions[billingOfMaterialDocumentSupplierDetailsSchema[property]](param[property ])){
        return false
      }
    }
    return true;
  }
  else{
    return false;
  }
}

function isArrayOfSupplierDetailsBillingOfMeterialDocument(param) {
  if (isArray(param) && param.length !== 0) {
    for (var property = 0; property < param.length; property++) {
      if (!isSupplierDetailsOfBillingOfMeterialDocument(param[property])) {
        return false;
      }
    }
  }
  else{
    return false;
  }
  return true;
}

function isBillingOfMaterialDocument(param) {
  if(isStrictObject(param) && (Object.keys(param).length >= billingOfMaterialDocumentRequiredFields.length) && validateObjectDataWithProperties(billingOfMaterialDocumentRequiredFields.concat(billingOfMaterialDocumentOptionalFields), param)){
    if (!isObjectContainsFields(billingOfMaterialDocumentRequiredFields, param)) {
      return false;
    }
    for(var property in param){
      if(!validationFunctions[billingOfMaterialDocumentSchema[property]](param[property ])){
        return false
      }
    }
    return true;
  }
  else{
    return false;
  }
}


utilities.isUserName = isUserName;
utilities.isEmail = isEmail;
utilities.isPassword = isPassword;
utilities.isMobileNumber = isMobileNumber;
utilities.isAddress = isAddress;
utilities.isGeopoint = isGeopoint;
utilities.isClientType = isClientType;
utilities.toStrTrimLowercase = toStrTrimLowercase;
utilities.validateDataWithFunction = validateDataWithFunction;
utilities.isStrictObject = isStrictObject;
utilities.validateObjectDataWithProperties = validateObjectDataWithProperties;
utilities.isObjectContainsFields = isObjectContainsFields;
utilities.isStringProperty = isStringProperty;
utilities.isPositiveIntNoPreZero = isPositiveIntNoPreZero;
utilities.isInteger = isInteger;
utilities.isBillingOfMaterialDocument = isBillingOfMaterialDocument;

module.exports = utilities;
