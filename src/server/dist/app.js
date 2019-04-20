"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("config");
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("server/router"));
const api_1 = __importDefault(require("./api"));
const app = express_1.default();
app
    .use(express_1.default.static(config_1.get('staticDir')))
    .use('/api', api_1.default)
    .use(router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map