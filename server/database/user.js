import bcrypt from "bcryptjs";
const rounds = 7;

const users = [
  {
    username: "dummyuser",
    name: "Dummy user",
    email: "bdummyuser@gmail.com",
    password: bcrypt.hashSync("password", rounds),
  },
];

export default users;
