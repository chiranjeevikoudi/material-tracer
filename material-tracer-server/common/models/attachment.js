'use strict';

module.exports = function(Attachment) {

  Attachment.upload = function(req, res, material_id, cb) {
    console.log(material_id);
    var StorageContainer = Attachment.app.models.StorageContainer;

    StorageContainer.getContainers(function (err, containers) {
      if (containers.some(function(e) { return e.name === material_id; })) {
        StorageContainer.upload(req, res, {container: material_id}, cb);
      }
      else {
        StorageContainer.createContainer({name: material_id}, function(err, c) {
          StorageContainer.upload(req, res, {container: c.name}, cb);
        });
      }
    });
  };

  Attachment.remoteMethod(
    'upload',
    {
      http: {path: '/:container/upload', verb: 'post'},
      accepts: [
        {arg: 'req', type: 'object', 'http': {source: 'req'}},
        {arg: 'res', type: 'object', 'http': {source: 'res'}},
        {arg: 'id', type: 'string'}
      ],
      returns: {arg: 'status', type: 'string'}
    }
  );
};
