"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const api_1 = require("./api");
var _ = require('underscore');
var fs = require('fs');
var request = require('request');
let clientPath = path.join(__dirname, '../client');
let app = express();
app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use('/api', api_1.default);
// app.get('*', stateRouting);
app.get('/api/recipe-search', function (req, res) {
    var url = encodeURI('http://food2fork.com/api/search?key=0b837ee21c5fb68ab79e1341b500cc09&q=' + req.query.q);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
        else {
            res.status(404);
        }
    });
});
app.get('/api/ingredients', function (req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09&rId=' + req.query.recipe);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
        else {
            res.status(404);
        }
    });
});
app.get('/', function (req, res) {
    res.send(fs.readFileSync('index.html', "utf8"));
});
app.listen(3000, () => {
    console.log('Listening on port 3000.');
});
