const { Router } = require('express');

const usersController = require('../controllers/userController');

const routes = Router();

routes.get('/users', usersController.getAllUsers);
routes.get('/users/:name', usersController.getUser);
routes.post('/users', usersController.createUser);
routes.delete('/users/:name', usersController.deleteUser);
routes.patch('/users/:name', usersController.updateUser);

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