

var shortUrl = require('node-url-shortener');

const express = require('express');

const shortenRouter = express.Router()

shortenRouter.post('/', (req, res, next) => {

    console.log(req.body)
    
    shortUrl.short(req.body.MainUrl , function(err, url){
        console.log(url);
        res.statusCode = 200;
        res.json({
            MainUrl: req.body.MainUrl,
            ShortUrl: url
        })
    });

    
})

module.exports = shortenRouter;


 