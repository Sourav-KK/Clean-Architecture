export default function user(...args) {
  return {
    getUserName: () => args[0].username,
    getEmail: () => args[0].email,
  };
}
