require('dotenv').config();

const app = require('./app');
const getEnvVariables = require('./config/env');

getEnvVariables().then(({ PORT }) => {
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
}).catch(error => {
    console.error({ error: error.message });
    process.exit(1);
});
