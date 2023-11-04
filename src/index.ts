import express, { Application } from "express";
import http from "http";
import expressConfig from "./frameworks/webServer/express";
import serverConfig from "./frameworks/webServer/server";
import config from "./config/config";
import mongoose from "mongoose";
import mongoDbConnection from "./frameworks/dataBase/mongoDB/connection";
import routes from "./frameworks/webServer/routes";

const app: Application = express();
const server = http.createServer(app);

expressConfig(app);

serverConfig(server, config).startServer();

// DB configuration and connection create
mongoDbConnection(mongoose, config).connectToMongo();

// routes for each endpoint
routes(app, express);

export default {app };
