const usersModel = require('../models/userModel');

module.exports = {
    // mySQL - mesmo formato
    // mongodb - mesmo formato 
    async getUsersFromDB() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(usersModel);
            }, 1000);
        });
    },
    async getUserByName(name) {
        const user = usersModel.users.find(user => user.name === name);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(user);
            }, 1000);
        });
    },
    async insertNewUser(user) {
        return new Promise((resolve) => {
            usersModel.users.push({ name: user.name });
            setTimeout(() => {
                resolve(user);
            }, 1000);
        });
    } 
}