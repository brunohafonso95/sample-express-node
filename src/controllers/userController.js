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
    async createUser(req, res) {
        const newUser = await createUser(req.body);
        res.status(httpStatus.CREATED).json(newUser);
    }
};

// callback - tratar o assincronismo

// promise - tratar o assincronismo


