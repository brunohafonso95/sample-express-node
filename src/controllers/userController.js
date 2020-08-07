const httpStatus = require('http-status');

const usersRepository = require('../repositories/userRepository');
const { createUser } = require('../services/userService');

module.exports = {
    /**
     * método do controller listar todos os usuários 
     * @function getAllUsers
     * @param {import('express').Request} _req objeto request do express
     * @param {import('express').Response} res objeto responde do express 
     */
    async getAllUsers(_req, res) {
        const { users } = await usersRepository.getUsersFromDB(); 
        res.json([...users]);
    },
    /**
     * método do controller responsável por criar um novo usuário
     * @function createUser
     * @param {import('express').Request} req objeto request do express
     * @param {import('express').Response} res objeto responde do express 
     */
    async createUser(req, res) {
        const newUser = await createUser(req.body);
        res.status(httpStatus.CREATED).json(newUser);
    }
};


