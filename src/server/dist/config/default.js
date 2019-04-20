"use strict";
process.env.ALLOW_CONFIG_MUTATIONS = 'true';
const config = {
    server: {
        port: 1122
    },
    db: {
        connectionString: process.env.DB_CONNECTION,
        options: {
            dialect: 'postgres'
        }
    },
    staticDir: process.env.STATIC_DIR || './'
};
module.exports = config;
//# sourceMappingURL=default.js.map