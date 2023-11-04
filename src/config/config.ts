import dotenv from "dotenv";
dotenv.config();

const PORT_NO = process.env.PORT_NO || 8080;
const MONGO_URL: string | undefined = process.env.MONGO_URL;

export default {
  port: PORT_NO,
  mongo: {
    uri: MONGO_URL,
  },
};
