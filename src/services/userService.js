const httpStatus = require('http-status');

const userRepository = require('../repositories/userRepository');
const HttpError = require('../errors/HttpError');


/**
 * @typedef {object} User
 * @property {string} name nome do usuário
 */

module.exports = {
    /**
     * função que cria um usuário, validando antes se o nome informado não pertence
     * a nenhum outro usuáio já cadastrado na base
     * @function createUser
     * @param {User} user dados do usuário que será cadastrado na base
     * @throws {HttpError} instancia do erro http com a mensagem amigável e o status code 
     * @returns {Promise<User>} novo usuário cadastrado
     */
    async createUser(user) {
        const alreadyExists = await userRepository.getUserByName(user.name);
        if(alreadyExists) {
            throw new HttpError('esse nome de usuário já está em uso', httpStatus.CONFLICT);
        } 

        await userRepository.insertNewUser(user);
        return user;
    }
}