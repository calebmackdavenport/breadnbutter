import * as express from 'express';
var request = require('request');

let router = express.Router();
var app = express();

router.get('/:id', function(req, res) {

    var url = encodeURI('http://food2fork.com/api/search?key=0b837ee21c5fb68ab79e1341b500cc09&q=' + req.params.id);
    request(url, function (error: string, response: any, body: any) {
        if (!error && response.statusCode == 200) {
            // console.log(JSON.parse(body));
            console.log("test3");
            res.send(body);
            }
        else {
            res.status(404);
            }
        });

});


export default router;