const httpStatus = require('http-status');

const userRepository = require('../repositories/userRepository');
const HttpError = require('../errors/HttpError');

module.exports = {
    async createUser(user) {
        /**
         * não posso inserir na base de dados um usuário com nome repetido
         */
        const alreadyExists = await userRepository.getUserByName(user.name);
        if(alreadyExists) {
            throw new HttpError('esse nome de usuário já está em uso', httpStatus.CONFLICT);
        } 

        await userRepository.insertNewUser(user);
        return user;
    }
}