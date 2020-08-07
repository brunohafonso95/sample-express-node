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
 * POST /api/v1/users
 * @tag Users
 * @summary Create a new user.
 * @description returns the new user created.
 * @bodyContent {User} application/json
 * @bodyRequired
 * @response 201 - A JSON user object
 * @responseContent {User} 201.application/json
 * @response 409 - A JSON error object
 * @responseContent {CommonError} 409.application/json
 */
routes.post('/users', usersController.createUser);

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