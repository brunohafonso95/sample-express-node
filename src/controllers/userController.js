const httpStatus = require('http-status');

const usersRepository = require('../repositories/userRepository');
const { createUser } = require('../services/userService');

module.exports = {
    async getAllUsers(req, res) {
        // req - requisição
        // res - resposta
        
        // Promise
        // resolved
        // pending
        // rejected
        const { users } = await usersRepository.getUsersFromDB(); 
        res.json([...users]);
    },
    async getUser(req, res) {
        const user = await usersRepository.getUserByName(req.params.name);
        res.json(user);
    },
    async createUser(req, res) {
        const newUser = await createUser(req.body);
        res.status(httpStatus.CREATED).json(newUser);
    },
    async deleteUser(req, res) {
        const user = await usersRepository.deleteUserByName(req.params.name);
        res.json(user);
    },
    async updateUser(req, res) {
        const user = await usersRepository.updateUserByName(req.params.name, req.body);
        res.json(user);
    }

};

// callback - tratar o assincronismo

// promise - tratar o assincronismo


