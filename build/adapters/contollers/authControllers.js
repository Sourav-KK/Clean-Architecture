"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("../../applications/useCase/auth/login"));
function authControllers(userDbRepository, userDbRepositoryImpl) {
    const dbRepository = userDbRepository(userDbRepositoryImpl());
    const loginUser = (req, res, nex) => {
        const { username, email } = req.body;
        (0, login_1.default)(email, username, dbRepository)
            .then(() => {
            res.status(200).json({ message: `${email}: Successfully logged in` });
        })
            .catch((err) => console.error(err.message));
    };
    const fetchAllUsers = (req, res, next) => { };
    return {
        loginUser,
    };
}
exports.default = authControllers;
//# sourceMappingURL=authControllers.js.map