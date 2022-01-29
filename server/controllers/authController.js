import User from "../models/userModel.js";
import Organizer from "../models/organizerModel.js";
import expressAsyncHandler from "express-async-handler";

// POST sign up user
export const signUpUser = expressAsyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;
  const user_emailCheck = await User.findOne({ email });
  if (user_emailCheck) {
    res.status(401).send({ msg: "This email is already registered." });
    throw new Error("This email is already registered.");
  }
  const user_usernameCheck = await User.findOne({ username });
  if (user_usernameCheck) {
    res.status(401).send({ msg: "This username is already taken." });
    throw new Error("This username is already taken.");
  }
  const newUser = await User.create({ username, name, email, password });
  if (newUser) {
    res.status(201).json({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      bugs: newUser.bugs,
      employee: newUser.employee,
      _id: newUser._id,
    });
  } else {
    res.status(401).send({ msg: "Something is wrong. Please retry." });
    throw new Error("Something is wrong. Please retry.");
  }
});

// POST sign up organizer
export const signupOrganizer = expressAsyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const organizer_nameCheck = await Organizer.findOne({ name });
  if (organizer_nameCheck) {
    res.status(401).send({ msg: "This name is already taken." });
    throw new Error("This name is already taken.");
  }
  const newOrganizer = await Organizer.create({ name, password });
  if (newOrganizer) {
    res.status(201).send({
      name: newOrganizer.name,
      bugs: newOrganizer.bugs,
      _id: newOrganizer._id,
    });
  } else {
    res.status(401).send({ msg: "Something is wrong. Please retry." });
    throw new Error("Something is wrong. Please retry.");
  }
});

// GET sign in user+organizer
export const signIn = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if(user && (await user.passwordVerification(password))){
    res.status(201).send({
      name: user.name,
      username: user.username,
      email: user.email,
      bugs: user.bugs,
      employee: user.employee,
      _id: user._id,
    })
  }
  else{
    const organizer = await Organizer.findOne({ name: username });
    if (!organizer) {
      res.status(401).send({ msg: "User/organization does not exists." });
      throw new Error("User does not exists.");
    }
    if(organizer && (await organizer.passwordVerification(password))){
      res.status(201).send({
        name: organizer.name,
        bugs: organizer.bugs,
        _id: organizer._id,
      })
    }
    res.status(401).send({msg: "Invalid combination of username and password"})
    throw new Error ("Invalid combination of username and password")
  }
});

// sign out