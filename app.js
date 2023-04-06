var express = require('express'),
    app = express(),
    http = require('http'),
    https = require('https'),
    url = require('url');

app.set('view engine', 'ejs');
app.locals.googleAnalyticsID = process.env.GOOGLE_ANALYTICS_ID;
app.locals.repoURL = 'https://github.com/danieldickison/js-csv-viewer';

app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('index');
});

var port = process.env.port || 3001;
app.listen(port);
console.log('Listening on port ' + port);
