var net = require('net');
var server = net.createServer( function (socket) {
  var date = new Date();
  console.log(date.getDate());
}
);
server.listen(8000);
