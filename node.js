var http = require("http");
var dt = require('./dateTimeModule');

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Date And Time are " + dt.dateTime())
  res.end()
}).listen(8080)
