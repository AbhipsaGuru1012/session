const express = require('express');

const test = express.Router()

test.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : "HAVE FUN PEEPS"
    })
})
.post((req, res,next) => {
    console.log(req.body)
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : req.body
    })
})
.put((req, res,next) => {
    console.log(req.body)
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : req.body
    })
})
.delete((req, res,next) => {
    console.log(req.body)
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : req.body
    })
})

test.route('/:testParameter')
.get((req, res, next) => {
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : "HAVE FUN PEEPS",
        params: req.params
    })
})
.post((req, res,next) => {
    console.log(req.body)
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : req.body
    })
})
.put((req, res,next) => {
    console.log(req.body)
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : req.body
    })
})
.delete((req, res,next) => {
    console.log(req.body)
    res.statusCode = 200;
    res.json({
        Message: "Hello world, Welcome to your first API endpoint",
        DATA : req.body
    })
})


module.exports = test;