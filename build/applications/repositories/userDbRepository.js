"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface
function userRepository(repository) {
    const findByEmail = (email) => repository.findByEmail(email);
    const add = (user) => repository.add(user);
    return {
        findByEmail,
        add,
    };
}
exports.default = userRepository;
//# sourceMappingURL=userDbRepository.js.map