var http = require("http");
var dt = require("./dateTimeModule");
var url = require("url");
var fs = require('fs')

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    //res.write("Date And Time are " + dt.dateTime());
    //res.write(req.url);
    /*
     url.parse method parses the URL of req.url and returns a URL object containing various components of the URL.
     The true parameter passed to the url.parse method indicates that the query string should be parsed and returned as an object.
     query property of the returned URL object contains the parsed query string parameters as an object.
     So, q will be an object containing the parsed query string parameters of the URL of the HTTP request.
  */
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month + " " + q.day
    res.end(text);
  })
  .listen(8080);
