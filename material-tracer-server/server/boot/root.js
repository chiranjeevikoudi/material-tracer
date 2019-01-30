'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());
  router.get('/login', function(req, res) {
    res.sendFile('/home/sys1049/files/Hackathon/material_tracer/client/login.html');
  });
  server.use(router);
  server.use(router);
};
