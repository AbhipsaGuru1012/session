const express = require('express');
const test = require('./testApi/testController');

const apiRouter = express.Router();
const testController = require('./testApi/testController');
const shortController = require('./testApi/shortenURL');
// const userController = require('./testApi/user');

apiRouter.use('/test', testController );
apiRouter.use('/short', shortController );
// apiRouter.use('/user', userController)

module.exports = apiRouter;