const express = require('express');
const test = require('./testApi/testController');

const apiRouter = express.Router();
const testController = require('./testApi/testController');

apiRouter.use('/test', testController );

module.exports = apiRouter;