const Joi = require("@hapi/joi");

function validateSchema(value, schema) {
    const result = schema.validate(value);
    if(result.error) {
        throw new Error('error on env variables');
    }
    
    return result.value;
}

module.exports = () => {
return new Promise((resolve, reject) => {
    try {
        const envSchema = Joi.object({
          PORT: Joi.number().default(3333),
        });
      
        const { PORT } = process.env;
        const result = validateSchema({ PORT }, envSchema);
        resolve(result);
    } catch (error) {
        reject(error);
    }
});
};
