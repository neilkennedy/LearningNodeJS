//http://chimera.labs.oreilly.com/books/1234000001808/ch01.html#chap5_id35940363

/*jslint node: true */
(function () {
    'use strict';

    var http = require('http');

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello World\n');
    }).listen(80, '127.0.0.1');

    console.log('Server running at http://127.0.0.1/');
}());