/**
 * Created by sys1035 on 13/6/17.
 */
export class Utils {
  /*var regularEx = {
    alphaWord: /^[a-z]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password:/^[a-z0-9@#\$%]*$/,
    mobile: [
      /^(9|8|7|6)(\d){9}$/,
      /^(9|8|7|6)(\d){2}[-. ](\d){3}[-. ](\d){4}$/,

      /^[\+]?[9][1](9|8|7|6)(\d){2}(\d){3}(\d){4}$/,
      /^[\+]?[9][1][-. ](9|8|7|6)(\d){2}[-. ](\d){3}[-. ](\d){4}$/
    ],
    latitude: /^[-|+]?((([0-9]|([1-8][0-9]))(\.[0-9]{0,10})?)|(90))\°?$/,
    longitude: /^[-|+]?((([0-9]|([1-9][0-9])|(1[0-7][0-9]))(\.[0-9]{0,10})?)|(180))\°?$/,
    integer: /^[-|+]?\d+$/,
    positiveInteger: /^[+]?\d+$/,
    positiveIntegerNoPreZero: /^[+]?[1-9][0-9]*$/,



    hourInFloat : /^[0-2]?[0-9](.[0-5]?[0-9])?$/,
    dateInMilliseconds: /^[1-9][0-9]*$/,
    //socialId: /^[a-z0-9][a-z0-9_-]+[a-z0-9]$/,
    /!*socialId: /^[a-z0-9][a-z0-9_-]*$/,*!/
    socialId: /^[a-z0-9_-]*$/,
    //intent: /^([a-z0-9]+[_ \/-]?[a-z0-9]+)+$/,
    intent: /^[a-z0-9][a-z0-9_.,;:\s@<>&() \/-s]+[a-z0-9]$/,

    alphaString: /^[a-z\s]+$/,
    deviceOS: /^[a-z0-9][a-z0-9\s-\.\/]+$/,
    deviceModelAndBrowser: /^[a-z0-9][a-z0-9\s-\.;]+$/,
    alphaLatinString: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+$/,
    alphaLatinWord: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+$/,
    //companyAndDesignation: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-&\.,\/']*$/,
    companyAndDesignation: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,\/'<>\?:;\[\]\{\}\+\\\=_\(\)\*&\^%\$#@\!\~\`]*$/,
    location: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,]*$/,
    //country: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,]*$/,
    country: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,\(\)]*$/,
    //workType: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-&\.,]*$/,
    workType: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,\/'<>\?:;\[\]\{\}\+\\\=_\(\)\*&\^%\$#@\!\~\`]*$/,
    addressData: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-&,:;\/\.\(\)]+$/,
    //institute: /^[a-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,&@'\(\)|]+$/,
    //classAndCourse: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff][a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-&,:;'\/\.\(\)]+$/,
    institute: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,\/'<>\?:;\[\]\{\}\+\\\=_\(\)\*&\^%\$#@\!\~\`]*$/,
    classAndCourse: /^[a-z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s-\.,\/'<>\?:;\[\]\{\}\+\\\=_\(\)\*&\^%\$#@\!\~\`]*$/,
    name: /^[a-z]+[a-z ,.\'-]+$/i,

    ipv4: /^(\d){1,3}.(\d){1,3}.(\d){1,3}.(\d){1,3}$/,

    indiaMobile:[
      /^[\+][9][1](9|8|7|6)(\d){2}(\d){3}(\d){4}$/,
      /^[\+][9][1](9|8|7|6)(\d){2}[-](\d){3}[-](\d){4}$/,
      /^[\+][9][1](9|8|7|6)(\d){2}[.](\d){3}[.](\d){4}$/,
      /^[\+][9][1](9|8|7|6)(\d){2}[ ](\d){3}[ ](\d){4}$/
    ],
    landline: /^[0-9]\d{2,4}[- ]?\d{6,8}$/,
    //day: /^(\d){1,2}$/,
    day: /(?:\b)(([1-9]|0[1-9]|[1-2][0-9]|3[0-1]))(?:\b)/,
    //month: /^(\d){1,2}$/,
    //month: /^(\d){1,2}$/,
    month:  /(?:\b)(([1-9]|0[1-9]|[1][0-2]))(?:\b)/,
    year: /^(\d){4}$/,
    domain: /^([a-z0-9\.\-\+]){1,62}\.(\w{2,6})$/,

    //domain: /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/,
    //pincode: /^[0-9][0-9\- ]+[0-9]$/,
    pincode: /^[1-9][0-9]{5}$/,
    username: /^[a-zA-Z0-9._]+$/,
    fb_like_category: /^([a-z0-9&=_%@#`,\|\?\*\$\^\+~'"!:()\[\]\{\}\. \/-])+$/,
    fb_like: /^([a-z0-9&=_%@#`,\|\?\*\$\^\+~'"!:()\[\]\{\}\. \/-])+$/,
    url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!%\$&'\(\)\*\+,;=.]+$/,
    //url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/ |www\.)[a-zA-Z0-9\-\+]+\.[a-zA-Z]{2,6}(\/.*)?$/,
    //url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/ |www\.)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    app_name: /^([a-zA-Z0-9*\s,.:&-+()_™]*)$/,
    package_name: /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/,
    version_name: /^([A-Za-z0-9-.\s()_]*)$/,
    time_stamp: /^(\d{4}-\d{2}-\d{2})$/i
  };
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
    /!*  console.log("geo point is array",isArrayOfNumbers(param) );
      console.log("geo point length of array",param.length );
      console.log("geo point is latitude",isLatitude(param[0]) );
      console.log("geo point is longitude",isLongitude(param[1]) );
      console.log(param[0],typeof param[0])
      console.log(param[1],typeof param[1])*!/
    return(isArrayOfNumbers(param) && (param.length === 2) && isLatitude(param[0]) && isLongitude(param[1]));
  }

  function isClientType(param) {
    return(isAlphaString(param) && (param === "manufacturer" ||param === "supplier"));

  }

  function validateDataWithFunction(data, validateFunction, dataName, dataType) {
    var result = {"isValid": false};
    if (data === undefined || data === null || data === "") {
      result['errorMessage'] = dataName + " is invalid. It should not be null,undefined and empty string";
    }
    else if (!validateFunction(data)) {
      result['errorMessage'] = dataName + " is invalid. It must be " + dataType;
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

  function getCurrentTimeLong() {
    return Math.round(new Date().getTime() / 1000);
  }
*/
}
