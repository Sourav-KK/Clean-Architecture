"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT_NO = process.env.PORT_NO;
const MONGO_URL = process.env.MONGO_URL;
exports.default = {
    port: PORT_NO || 8080,
    mongo: {
        uri: MONGO_URL,
    },
};
//# sourceMappingURL=config.js.map