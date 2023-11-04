"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function user(...args) {
    return {
        getUserName: () => args[0].username,
        getEmail: () => args[0].email,
    };
}
exports.default = user;
//# sourceMappingURL=user.js.map