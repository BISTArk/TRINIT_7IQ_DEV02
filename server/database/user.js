import bcrypt from "bcryptjs";
const rounds = 7;

const users = [
  {
    name: "Bruce Wayne",
    email: "brucewayne@gmail.com",
    password: bcrypt.hashSync("dummypass", rounds),
    isSuperAdmin: true,
  },
];

export default users;
