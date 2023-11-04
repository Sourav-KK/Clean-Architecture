import { Mongoose } from "mongoose";

interface Config {
  mongo: {
    uri: string;
  };
}

interface Connection {
  connectToMongo: () => void;
}

export default function connection(
  mongoose: Mongoose,
  config: Config
): Connection {
  function connectToMongo(): void {
    mongoose
      .connect(config.mongo.uri)
      .then(() => {})
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
