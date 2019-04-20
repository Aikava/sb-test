"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const config = {
    staticDir: process.env.STATIC_DIR || path_1.default.resolve(__dirname, '../../client/dist'),
    db: {
        connectionString: process.env.DB_CONNECTION || 'postgres://user:password@localhost:5432/sb_test'
    }
};
module.exports = config;
//# sourceMappingURL=local.js.map