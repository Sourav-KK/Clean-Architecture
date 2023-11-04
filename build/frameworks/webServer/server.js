"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serverConfig(server, config) {
    function startServer() {
        server.listen(config.port, () => {
            console.log("Server connected on port: " + config.port + "");
        });
    }
    return {
        startServer,
    };
}
exports.default = serverConfig;
//# sourceMappingURL=server.js.map