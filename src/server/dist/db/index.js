"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = require("config");
const connectionString = config_1.get('db.connectionString');
const dbOptions = config_1.get('db.options');
const db = new sequelize_1.default(connectionString, dbOptions);
const funds = db.import('funds');
const donations = db.import('donations');
donations.belongsTo(funds, { as: 'funds', foreignKey: 'fund_id' });
exports.default = { db, funds, donations };
//# sourceMappingURL=index.js.map