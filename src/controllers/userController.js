const httpStatus = require('http-status');

const usersRepository = require('../repositories/userRepository');
const { 
    createUser,
    deleteUserByName,
    updateUserByName,
    getUserByName,
    getAllUsers
} = require('../services/userService');

module.exports = {
     /**
     * método do controller listar todos os usuários 
     * @function getAllUsers
     * @param {import('express').Request} _req objeto request do express
     * @param {import('express').Response} res objeto responde do express 
     */
    async getAllUsers(req, res) {
        const { users } = await getAllUsers();
        res.json([...users]);
    },
  
    async getUserByName(req, res) {
        const user = await getUserByName(req.params.name);
        res.json(user);
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
    },
    async deleteUserByName(req, res) {
        await deleteUserByName(req.params.name);
        res.sendStatus(httpStatus.NO_CONTENT);
    },
    async updateUserByName(req, res) {
        const user = await updateUserByName(req.params.name, req.body);
        res.json(user);
    }
};


