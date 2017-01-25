
var http = require('http'),
        fs = require('fs');

//var html = fs.readFileSync('./index.html');

fs.readFile('./index.html', function (err, html) {

    if (err)
        throw err;

    http.createServer(function (req, response) {

        if (req.url.indexOf("favicon.ico") > 0) {
            return;
        }

        console.log('=============\n\n');

        console.log(req);

        console.log('=============\n\n');


        response.writeHead(200, {
            'Content-Length': html.length,
            'Content-Type': 'text/html'});

        response.write(html);
        response.end();

    }).listen(8080);

});

