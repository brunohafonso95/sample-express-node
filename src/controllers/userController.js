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
    async getAllUsers(req, res) {
        // req - requisição
        // res - resposta
        
        // Promise
        // resolved
        // pending
        // rejected
        const { users } = await getAllUsers();
        res.json([...users]);
    },
    async getUserByName(req, res) {
        const user = await getUserByName(req.params.name);
        res.json(user);
    },
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

// callback - tratar o assincronismo

// promise - tratar o assincronismo


