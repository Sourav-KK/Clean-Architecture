import authRouter from "./auth";
import { Application } from "express";
import { expTyp } from "../../../Utilities/typeOfs";

export default function routes(app: Application, express: expTyp) {
  app.use("/login", authRouter(express));
}
