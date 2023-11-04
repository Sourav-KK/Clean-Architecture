"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
function expressConfig(app) {
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use(body_parser_1.default.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    }));
    app.use((0, cors_1.default)());
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-type, Authorization, Cache-control, Pragma");
        next();
    });
    app.use((0, morgan_1.default)("combined"));
}
exports.default = expressConfig;
//# sourceMappingURL=express.js.map