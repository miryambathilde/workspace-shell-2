let http = require("http");
let https = require("https");
let fs = require("fs");
let express = require('express');
let app = express();

app.use(express.static(__dirname+ "/src"));

app.set('port', (process.env.PORT || 80));

let sslOptions = {
    key: fs.readFileSync('https-requirements/localhost.key'),
    cert: fs.readFileSync('https-requirements/localhost.crt'),
    ca: fs.readFileSync('https-requirements/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
};

let httpServer = http.createServer(app);
let httpsServer = https.createServer(sslOptions, app);

let httpsPort = 443;

console.log("starting on " + httpsPort + ' (https)');
httpServer.listen(app.get('port'));
httpsServer.listen(httpsPort);
