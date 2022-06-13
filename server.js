// npm-Free Server by The Jared Wilcurt (https://github.com/TheJaredWilcurt/npm-Free-Server/blob/master/dist/server.js)
// All you need to run this is an installed copy of Node.JS
// Put this next to the files you want to serve and run: node server.js
// also see: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework#example

// Require in some of the native stuff that comes with Node
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
// Port number to use
var port = process.argv[2] || 8000;
// Colors for CLI output
//var WHT = '\033[39m';
var RED = '\033[31m';
var RED2 = '\033[91m';
var GRN = '\033[32m';
var GRN2 = '\033[92m'
var BOLD = '\033[1m'

var WARNING = '\033[93m'

var ENDC  = '\033[0m'; // No Color - aka reset color to default

// Create the server
http.createServer(function (request, response) {

    // The requested URL, like http://localhost:8000/file.html => /file.html
    var uri = url.parse(request.url).pathname;
    // get the /file.html from above and then find it from the current folder
    var filename = path.join(process.cwd(), uri);

    // Setting up MIME-Type (YOU MAY NEED TO ADD MORE HERE) <--------
    // "charset=UTF-8" for all 'text/*' ?
    var contentTypesByExtension = {
        '.css':  'text/css',
        '.html': 'text/html',
        '.js':   'text/javascript', // not application/javascript after all (https://datatracker.ietf.org/doc/rfc9239/)
        //'.json': 'text/json', // ???
        '.json': 'application/json',
        '.xml':  'application/xml; charset=UTF-8',
        '.ico':  'image/x-icon',
        '.svg':  'image/svg+xml',
        '.png':  'image/png',
        '.jpg':  'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif':  'image/gif',
        //'.webmanifest': 'application/manifest+json; charset=utf-8', // handled below

        //'.woff': 'application/font-woff',
        //'.ttf': 'application/font-ttf',
        //'.eot': 'application/vnd.ms-fontobject',
        //'.otf': 'application/font-otf',
        //'.wav': 'audio/wav',
        //'.mp4': 'video/mp4',
        //'.wasm': 'application/wasm'
    };

    // Check if the requested file exists
    // TODO: rewrite this with readFile
    fs.exists(filename, function (exists) {
        if (!exists) {
            // If it doesn't
            // Output a red error pointing to failed request
            console.log(RED2 + 'FAIL: ' + filename + ENDC);
            // Redirect the browser to the 404 page
            filename = path.join(process.cwd(), '/404.html');
        } else if (fs.statSync(filename).isDirectory()) {
            // If the requested URL is a folder, like http://localhost:8000/catpics
            // Output a green line to the console explaining what folder was requested
            console.log(GRN + 'FLDR> ' + ENDC + filename);
            // redirect the user to the index.html in the requested folder
            filename += '/index.html';
        }
        // Assuming the file exists, read it
        fs.readFile(filename, 'binary', function (err, file) {
            // Output a green line to console explaining the file that will be loaded in the browser
            console.log(GRN + 'FILE: ' + ENDC + filename);
            // If there was an error trying to read the file
            if (err) {
                // Put the error in the browser
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.write(err + '\n');
                response.end();
                return;
            }

            // Otherwise, declare a headers object and a var for the MIME-Type
            var headers = {};
            var contentType;
            if(filename.indexOf('manifest') > -1) {
                contentType = 'application/manifest+json; charset=utf-8';
            } else {
                contentType = contentTypesByExtension[path.extname(filename).toLowerCase()];
            }

            // If the requested file has a matching MIME-Type
            if (contentType) {
                // Set it in the headers
                headers['Content-Type'] = contentType;
            }

            /* TEST
            if (!contentType) {
                contentType = 'application/octet-stream'
            }
            // Set it in the headers
            headers['Content-Type'] = contentType;
            */


            // Output the read file to the browser for it to load
            response.writeHead(200, headers);
            response.write(file, 'binary');
            response.end();
        });

   });

}).listen(parseInt(port, 10));

// Message to display when server is started
//console.log(WHT + 'Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown');
console.log('Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown');