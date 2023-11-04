// interface
export default function userRepository(repository) {
  const findByEmail = (email: string) => repository.findByEmail(email);
  
  const add = (user) => repository.add(user);

  return {
    findByEmail,
    add,
  };
}
