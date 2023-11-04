import authControllers from "../../../adapters/contollers/authControllers";
import userDbRepositoryMongoDB from "../../../frameworks/dataBase/mongoDB/repositories/userRepositoryMongoDB";
import userDbRepository from "../../../applications/repositories/userDbRepository";
import { expTyp } from "../../../Utilities/typeOfs";

export default function authRouter(express: expTyp) {
  const router = express.Router();
  const controller = authControllers(userDbRepository, userDbRepositoryMongoDB);

  router.route("/").post(controller.loginUser);
  // .get(controller.fetchAllUserDetails)
  return router;
}
