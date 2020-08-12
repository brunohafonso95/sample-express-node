const httpStatus = require('http-status');

const userRepository = require('../repositories/userRepository');
const HttpError = require('../errors/HttpError');
const { updateUserByName, getUserByName, deleteUserByName } = require('../repositories/userRepository');

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
    },
    async getAllUsers() {
        /**   
         * precisa ao menos ter um usuário na base de dados para ser retornado
         */
        const alreadyExists = await userRepository.getUsersFromDB();
        if(!alreadyExists.length) {
            throw new HttpError('não existe usuários na base de dados', httpStatus.NOT_FOUND);
           }
        return alreadyExists;
    },

    async getUserByName(name) {
        /**
         * precisa existir o usuário na base de dados para ser retornado.
         */
        const alreadyExists = await userRepository.getUserByName(name);
        if(!alreadyExists) {
            throw new HttpError('esse usuário não existe na base de dados', httpStatus.NOT_FOUND);
        }

        await userRepository.getUserByName(name);
        return name;
    },
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