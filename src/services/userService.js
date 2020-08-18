const httpStatus = require('http-status');

const HttpError = require('../errors/HttpError');
const userRepository = require('../repositories/userRepository');


/**
 * @typedef {object} User
 * @property {string} name nome do usuário
 */

module.exports = {
    /**
     * Função que cria um usuário, validando antes se o nome informado não pertence
     * a nenhum outro usuáio já cadastrado na base.
     * @function createUser
     * @param {User} user Dados do usuário que será cadastrado na base.
     * @throws {HttpError} Instancia do erro http com a mensagem amigável e o status code.
     * @returns {Promise<User>} Novo usuário cadastrado.
     */
    async createUser(user) {
        const alreadyExists = await userRepository.getUserByName(user.name);
        if(alreadyExists) {
            throw new HttpError('esse nome de usuário já está em uso', httpStatus.CONFLICT);
        } 

        await userRepository.insertNewUser(user);
        return user;
    },
    /**
     * Função responsável por listar um único usuario buscando pelo nome . 
     * @function getUserByName
     * @param {String} name Nome do usuário que será selecionado na base.
     * @throws {HttpError} Instancia do erro http com a mensagem amigável e o status code
     * @returns {Promise<name>} O usuario selecionado pelo nome.
     */
    async getUserByName(name) {
        /**
         * precisa existir o usuário na base de dados para ser retornado.
         */
        const user = await userRepository.getUserByName(name);
        if(!user) {
            throw new HttpError('esse usuário não existe na base de dados', httpStatus.NOT_FOUND);
        }

        return user;
    },
    /**
     * Função responsável por deletar um unico usuario com base no nome digitado. 
     * @function deleteUserByName
     * @param {String} name Nome do usuário que será selecionado na base.
     * @throws {HttpError} Instancia do erro http com a mensagem amigável e o status code.
     * @returns {Promise<name>} O usuario deletado.
     */
    async deleteUserByName(name) {
        /**
         * não pode excluir um usuário que não existir na base de dados
         */
        const alreadyExists = await userRepository.getUserByName(name);
        if(!alreadyExists) {
            throw new HttpError('esse usuário não existe na base de dados', httpStatus.NOT_FOUND);
        }

        await userRepository.deleteUserByName(name);
        return name;
    },
    /**
     * Função responsável por alterar os dados do usuario com base no nome digitado. 
     * @function updateUserByName
     * @param {String} name Nome do usuário que será selecionado na base.
     * @throws {HttpError} Instancia do erro http com a mensagem amigável e o status code.
     * @returns {Promise<payload>} Usuario ja alterado.
     */
    async updateUserByName(name, payload) {
        /**
         * não pode atualizar um usuário que não existe
         */
        const alreadyExists = await userRepository.getUserByName(name);
        if(!alreadyExists) {
            throw new HttpError('não é possivel atualizar, pois o usuário não existe na base de dados', httpStatus.NOT_FOUND);
        }

        await userRepository.updateUserByName(name, payload);
        return payload;
    }

}