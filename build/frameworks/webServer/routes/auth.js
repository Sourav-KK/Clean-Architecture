"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authControllers_1 = __importDefault(require("../../../adapters/contollers/authControllers"));
const userRepositoryMongoDB_1 = __importDefault(require("../../../frameworks/dataBase/mongoDB/repositories/userRepositoryMongoDB"));
const userDbRepository_1 = __importDefault(require("../../../applications/repositories/userDbRepository"));
function authRouter(express) {
    const router = express.Router();
    const controller = (0, authControllers_1.default)(userDbRepository_1.default, userRepositoryMongoDB_1.default);
    router.route("/").post(controller.loginUser);
    // .get(controller.fetchAllUserDetails)
    return router;
}
exports.default = authRouter;
//# sourceMappingURL=auth.js.map