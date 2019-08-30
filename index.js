const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const imageToAscii = require('image-to-ascii')
var http = require('http');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to handle the root path
app.get('/', async function(req, res) {

    let imageUrl = req.query.imageUrl
     
    if (!imageUrl) {
    	res.charset = 'utf8';
        res.send("imageUrl parameter required")	
	return;
    }

    imageUrl = imageUrl.trim()
    imageToAscii(imageUrl, {
		size: { width: 800 }, colored: true
	}, (err, converted) => {
	console.log(err || converted)
	res.send(err || converted )
    })
});

let server = app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});

