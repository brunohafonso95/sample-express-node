const express = require('express');
require('express-async-errors');
const openapi = require('openapi-comment-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerStats = require('swagger-stats');    


const routes = require('./routes');
const logMiddleware = require('./middlewares/logMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const apiDocsConfig = require('./config/openapirc');

const spec = openapi(apiDocsConfig);
const app = express();

/**
 * middlewares
 */
app.use(express.json());
app.use(logMiddleware);

/**
 * rotas
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
app.use('/api/v1', routes.userRoutes);
app.use(swaggerStats.getMiddleware({ swaggerSpec: require('../openapi.json'),  }));

/**
 * error middleware
 */
app.use(errorMiddleware);

module.exports = app;