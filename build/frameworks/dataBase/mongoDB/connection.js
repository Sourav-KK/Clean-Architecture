"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function connection(mongoose, config) {
    function connectToMongo() {
        mongoose
            .connect(config.mongo.uri)
            .then(() => { })
            .catch((err) => {
            console.log("ERROR:", err);
        });
    }
    mongoose.connection.on("connected", () => {
        console.info("Connected to MongoDB!");
    });
    mongoose.connection.on("error", (error) => {
        console.error(`Error in MongoDB connection: ${error}`);
        mongoose.disconnect();
    });
    return {
        connectToMongo,
    };
}
exports.default = connection;
//# sourceMappingURL=connection.js.map