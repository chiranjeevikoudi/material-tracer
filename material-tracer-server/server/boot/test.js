var loopback = require("loopback");
var here = new loopback.GeoPoint([10.32424, 5.84978]);
console.log(typeof here);
console.log(Object.keys(here));
console.log(here.lat,here.lng);
