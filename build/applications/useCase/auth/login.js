"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../../entities/user"));
function login(email, username, dbRepository) {
    if (!email) {
        const error = new Error("Please enter an email address");
        throw error;
    }
    return dbRepository.findByEmail(email).then(async (user) => {
        if (!user) {
            const newUser = (0, user_1.default)({
                username,
                email,
            });
            user = await dbRepository.add(newUser);
        }
    });
}
exports.default = login;
//# sourceMappingURL=login.js.map