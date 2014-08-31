//http://chimera.labs.oreilly.com/books/1234000001808/ch01.html#chap5_id35940363

/*jslint node: true */
(function () {
    'use strict';

    var express = require('express'),
        app = express(),
        server;

    app.get('/', function (req, res) {
        res.send('Welcome to Node Twitter');
    });

    server = app.listen(3000, function () {
        console.log('Listening on port %d', server.address().port);
    });

}());