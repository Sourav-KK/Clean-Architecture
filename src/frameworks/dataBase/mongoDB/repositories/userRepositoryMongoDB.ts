import UserModel from "../models/user";

export default function userRepositoryMongoDB() {
  const findByEmail = (email: string) => UserModel.findOne({ email });

  const add = (user) => {
    const newUser = new UserModel({
      username: user.getUserName(),
      email: user.getEmail(),
    });

    return newUser.save();
  };

  return {
    findByEmail,
    add,
  };
}

