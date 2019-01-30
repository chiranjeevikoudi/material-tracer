var app = require("../server/server");
var apiMongoUtilities = {};
var clientMongoConnection = app.dataSources.clientsMongoDB.connector;
var clientCollectionName = "clients";
var requestCollectionName = "requests";
var clientCounterModelName = "Counters";
var requestModelName = "Request";
var clientModelName = "Client";

function getNextSequenceValue(databaseConnection, collectionName, counterModelName, cb) {
  if (!collectionName) {
    return cb('collectionName is null/undefined');
  }
  if (!databaseConnection) {
    return cb('databaseConnection is null/undefined');
  }
  if (!counterModelName) {
    return cb('counterModelName is null/undefined');
  }
  var query = {_id: collectionName}
    , sort = [['_id', 'asc']]
    , doc = {$inc: {seq: 1}}
    , options = {new: true, upsert: true};
  databaseConnection.collection(counterModelName).findAndModify(query, sort, doc, options, function (error, result) {
    if (error) {
      return cb(error);
    }
    return cb(null, result.value.seq);
  });
}

function updateDocument(databaseConnection, modelName, where, update, callback) {
  if (!modelName) {
    return callback(new Error('modelName is null/undefined'));
  }
  if (!databaseConnection) {
    return callback(new Error('databaseConnection is null/undefined'));
  }
  if (where && update) {
    databaseConnection.collection(modelName).updateOne(where, update, function (error, result) {
      if (error) {
        callback(error);
      }
      else {
        var resultObject = {
          modifiedCount: result.modifiedCount,
          upsertedCount: result.upsertedCount,
          matchedCount: result.matchedCount
        };
        callback(null, resultObject);
      }
    });
  }
  else {
    return callback(new Error("where or update is null/undefined"));
  }
}

function updateRequestStatus(where,update,cb) {
  updateDocument(clientMongoConnection,requestModelName,where,update,cb);
}

function updateRequestAttachmentName(where,update,cb) {
  updateDocument(clientMongoConnection,requestModelName,where,update,cb);
}

function updateBillingOfMaterialDocument(where,update,cb) {
  updateDocument(clientMongoConnection,requestModelName,where,update,cb);
}

apiMongoUtilities.clientMongoConnection = clientMongoConnection;

apiMongoUtilities.clientCollectionName = clientCollectionName;
apiMongoUtilities.requestCollectionName = requestCollectionName;
apiMongoUtilities.clientCounterModelName = clientCounterModelName;

apiMongoUtilities.getNextSequenceValue = getNextSequenceValue;
apiMongoUtilities.updateRequestStatus = updateRequestStatus;
apiMongoUtilities.updateRequestAttachmentName = updateRequestAttachmentName;
apiMongoUtilities.updateBillingOfMaterialDocument = updateBillingOfMaterialDocument;

module.exports = apiMongoUtilities;
