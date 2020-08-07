/**
 * @class HttpError
 * @classdesc classe de erro global para tratar erros http
 * @extends Error
 */
class HttpError extends Error {
    /**
     * @param {string} message menssagem de erro que vai retornar para o usuário 
     * @param {string} statusCode código de http status que vai retornar para o usuário 
     */
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = HttpError;