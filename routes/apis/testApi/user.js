const express = require('express');

const mongoRouter = express.Router();
const User = require('../../../models/User');

mongoRouter.route('/')
.get( (req, res, next) => {
    User.find({})
    .then((users) => {
        res.statusCode = 200;
        res.json({
            users
        })
    })
})
.post((req, res, next) => {
    console.log(req.body)
    User.create(req.body)
    .then((user) => {
        console.log("User Created")
        console.log(user)

        res.statusCode = 200;
        res.json({
            user
        });

        next();
    })
})

module.exports = mongoRouter;


 