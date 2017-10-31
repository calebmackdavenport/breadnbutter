import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import api from './api';
import stateRouting from './middleware/routing.mw';
import * as cookieParser from 'cookie-parser';
import apiRouter from './api';
var _ = require('underscore');
var fs = require('fs');
var request = require('request');

let clientPath = path.join(__dirname, '../client');

let app = express();
app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', apiRouter);
app.get('*', stateRouting);


app.get('/api/recipe-search', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/search?key=0b837ee21c5fb68ab79e1341b500cc09' + '&q=' + req.query.q);
    request(url, function (error: any, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
        else {
            res.status(404);
        }
    });
});

app.get('/api/ingredients', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09' + '&rId=' + req.query.recipe);
    request(url, function (error:any, response:any, body:any) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
        else {
            res.status(404);
        }
    });
});

app.get('/', function(req, res) {
    res.send(fs.readFileSync('index.html', "utf8"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000.');
});
