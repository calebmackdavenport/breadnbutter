import * as express from 'express';
var request = require('request');

let router = express.Router();
var app = express();

router.get('/:id', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09&rId=' + req.params.id);
    request(url, function (error: string, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            // console.log("pumpkin squishy");
            // console.log(body);
            let response = JSON.parse(body);
            res.json(response.recipe);
        }
        else {
            res.status(404);
        }
    });
})
router.get('/title/:id', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09&rId=' + req.params.id);
    request(url, function (error: string, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            let response = JSON.parse(body);
            res.json(response.title);
        }
        else {
            res.status(404);
        }
    });
})
router.get('/source_url/:id', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09&rId=' + req.params.id);
    request(url, function (error: string, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            let response = JSON.parse(body);
            res.json(response.source_url);
        }
        else {
            res.status(404);
        }
    });
})
router.get('image_url/:id', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09&rId=' + req.params.id);
    request(url, function (error: string, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            let response = JSON.parse(body);
            res.json(response.image_url);
        }
        else {
            res.status(404);
        }
    });
})
//may never need to use this one
router.get('recipe_id/:id', function(req, res) {
    var url = encodeURI('http://food2fork.com/api/get?key=0b837ee21c5fb68ab79e1341b500cc09&rId=' + req.params.id);
    request(url, function (error: string, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            let response = JSON.parse(body);
            res.json(response.recipe_id);
        }
        else {
            res.status(404);
        }
    });
})


export default router;