var utils = {};
function getApiRequestDetails(apiUrl, contex) {
  var apiRequestDetails = {};
  apiRequestDetails.clientId = (contex.req.accessToken && contex.req.accessToken.userId) ? contex.req.accessToken.userId : undefined;
  apiRequestDetails.apiUrl = apiUrl;
  apiRequestDetails.remoteAddress = contex.req.connection.remoteAddress;
  apiRequestDetails.remotePort = contex.req.connection.remotePort;
  return apiRequestDetails;
}

function getCurrentTimeLong() {
  return Math.round(new Date().getTime() / 1000);
}

utils.getApiRequestDetails = getApiRequestDetails;
utils.getCurrentTimeLong = getCurrentTimeLong;

module.exports = utils;
