"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funds_1 = __importDefault(require("server/controllers/funds"));
const body_parser_1 = __importDefault(require("body-parser"));
const api = express_1.Router();
api
    .get('/funds', funds_1.default.findAll)
    .get('/funds/:fundId', funds_1.default.findOne)
    .post('/funds/:fundId', body_parser_1.default.json(), funds_1.default.addDonation);
exports.default = api;
//# sourceMappingURL=api.js.map