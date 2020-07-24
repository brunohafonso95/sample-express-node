const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const logMiddleware = require('./middlewares/logMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

/**
 * middlewares
 */
app.use(express.json());
app.use(logMiddleware);

/**
 * rotas
 */
app.use('/api/v1', routes.userRoutes);

/**
 * error middleware
 */
app.use(errorMiddleware);

module.exports = app;