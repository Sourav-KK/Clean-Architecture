import login from "../../applications/useCase/auth/login";
import { userRepoTyp, usrType } from "../../Utilities/typeOfs";
import { Request, Response } from "express";

export default function authControllers(
  userDbRepository: userRepoTyp,
  userDbRepositoryImpl: usrType
) {
  const dbRepository = userDbRepository(userDbRepositoryImpl());

  const loginUser = (req: Request, res: Response) => {
    const { username, email } = req.body;

    login(email, username, dbRepository)
      .then(() => {
        return res
          .status(200)
          .json({ message: `${email}: Successfully logged in` });
      })
      .catch((err: any) => {
        console.error(err.message);
        return res.status(404).json({ message: `Error: ${err.message}` });
      });
  };

  const fetchAllUsers = (req, res, next) => {};

  return {
    loginUser,
  };
}
