"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
function userRepositoryMongoDB() {
    const findByEmail = (email) => user_1.default.findOne({ email });
    const add = (user) => {
        const newUser = new user_1.default({
            username: user.getUserName(),
            email: user.getEmail(),
        });
        return newUser.save();
    };
    return {
        findByEmail,
        add,
    };
}
exports.default = userRepositoryMongoDB;
//# sourceMappingURL=userRepositoryMongoDB.js.map