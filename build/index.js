"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const express_2 = __importDefault(require("./frameworks/webServer/express"));
const server_1 = __importDefault(require("./frameworks/webServer/server"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = __importDefault(require("./frameworks/dataBase/mongoDB/connection"));
const routes_1 = __importDefault(require("./frameworks/webServer/routes"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, express_2.default)(app);
(0, server_1.default)(server, config_1.default).startServer();
// DB configuration and connection create
(0, connection_1.default)(mongoose_1.default, config_1.default).connectToMongo();
// routes for each endpoint
(0, routes_1.default)(app, express_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map