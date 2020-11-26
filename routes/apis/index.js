const express = require('express');
const test = require('./testApi/testController');

const apiRouter = express.Router();
const testController = require('./testApi/testController');
const shortController = require('./testApi/shortenURL');

apiRouter.use('/test', testController );
apiRouter.use('/short', shortController );

module.exports = apiRouter;