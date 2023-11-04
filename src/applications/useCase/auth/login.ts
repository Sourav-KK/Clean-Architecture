import userEntity from "../../../entities/user";

export default function login(email: string, username: string, dbRepository) {
  if (!email) {
    const error = new Error("Please enter an email address");

    throw error;
  }

  return dbRepository.findByEmail(email).then(async (user) => {
    if (!user) {
      const newUser = userEntity({
        username,
        email,
      });
      user = await dbRepository.add(newUser);
    }
  });
}
