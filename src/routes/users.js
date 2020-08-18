const { Router } = require('express');

const usersController = require('../controllers/userController');

const routes = Router();

/**
 * GET /api/v1/users
 * @tag Users
 * @summary Returns a list of users.
 * @description returns a list of users.
 * @response 200 - A JSON array of users
 * @responseContent {User[]} 200.application/json
 */
routes.get('/users', usersController.getAllUsers);

/**
 * GET /api/v1/users/{name}
 * @tag Users
 * @summary Returns a single user.
 * @pathParam {string} name 
 * @description Returns a single user.
 * @response 200 - A JSON array of users
 * @responseContent {User[]} 200.application/json
 * @response 404 - A JSON error array
 * @responseContent {CommonError} 404.application/json
 */
routes.get('/users/:name', usersController.getUserByName);
/**
 * POST /api/v1/users
 * @tag Users
 * @summary Create a new user.
 * @description Returns the new user created.
 * @bodyContent {User} application/json
 * @bodyRequired
 * @response 201 - A JSON user object
 * @responseContent {User} 201.application/json
 * @response 409 - A JSON error object
 * @responseContent {CommonError} 409.application/json
 */
routes.post('/users', usersController.createUser);
/**
 * PATCH /api/v1/users/{name}
 * @tag Users
 * @summary Updates a user
 * @pathParam {string} name 
 * @description Returns the updated user
 * @bodyContent {User} application/json
 * @bodyRequired
 * @response 200 - A JSON array of users
 * @responseContent {User} 200.application/json
 * @response 404 - A JSON error array
 * @responseContent {CommonError} 404.application/json
 */
routes.patch('/users/:name', usersController.updateUserByName);

/**
 * DELETE /api/v1/users/{name}
 * @tag User
 * @summary Delete a user
 * @pathParam {string} name 
 * @description Returns the deleted user
 * @response 204 - No Content
 * @response 404 - A JSON error array
 * @responseContent {CommonError} 404.application/json
 */
routes.delete('/users/:name', usersController.deleteUserByName);

// GET - listar dados
// POST - criação de dados
// PUT - atualização total de um dados
// PATCH - atualização parcial de um dados
// DELETE - deletar dado

// statusCode
// GET - 200 OK (deu certo)
// POST - 201 CREATED (dado criado)
// PUT - 200 | 204 (no content)
// DELETE - 200 | 204 (no content)

// statusCode
// 400 - erros de entrada dados
// 500 - erros inesperados (erros do servidor)

module.exports = routes;