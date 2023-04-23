var httpServer = require("http");

// const callbackHttp = () => {}
var server = httpServer.createServer(function (req, res) {
    // setting content header
    res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end("Lets finish the server call");
    res.end()
});

server.listen(7000);