import User from "../models/userModel.js";
import Organizer from "../models/organizerModel.js";
import expressAsyncHandler from "express-async-handler";

// POST sign up user
export const signUpUser = expressAsyncHandler(async (req, res) => {
  const { username, name, password } = req.body;
  const user_usernameCheck = await User.findOne({ username });
  if (user_usernameCheck) {
    res.status(401).send({ msg: "This username is already taken." });
    throw new Error("This username is already taken.");
  }
  const newUser = await User.create({ username, name, password });
  if (newUser) {
    res.status(201).json({
      name: newUser.name,
      username: newUser.username,
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

// GET sign in user
export const signInUser = expressAsyncHandler(async (req, res) => {
  
  const { username, password } = req.body;
  console.log({ username, password })
  const user = await User.findOne({ username });
  if (!user) {
    res.status(401).send({ msg: "User does not exists." });
    throw new Error("User does not exists.");
  } else if (user && (await user.passwordVerification(password))) {
    res.status(201).send({
      name: user.name,
      username: user.username,
      bugs: user.bugs,
      employee: user.employee,
      _id: user._id,
      employeeLevel: user.employeeLevel,
      organization: user.organization,
    });
  } else {
    res
      .status(401)
      .send({ msg: "Invalid combination of username and password" });
    throw new Error("Invalid combination of username and password");
  }
});

export const signInOrganizer = expressAsyncHandler(async (req, res) => {
  const { name, password } = req.body;
  console.log(req.body)
  const organizer = await Organizer.findOne({ name });
  console.log(organizer)
  if (!organizer) {
    res.status(401).send({ msg: "organizer does not exists." });
    throw new Error("organizer does not exists.");
  } else if (organizer && (await organizer.passwordVerification(password))) {
    res.status(201).send({
      name: organizer.name,
      bugs: organizer.bugs,
      employee: organizer.employee,
      _id: organizer._id,
    });
  } else {
    const organizer = await Organizer.findOne({ name: username });
    if (!organizer) {
      res.status(401).send({ msg: "organization does not exists." });
      throw new Error("organization does not exists.");
    }
    if (organizer && (await organizer.passwordVerification(password))) {
      res.status(201).send({
        name: organizer.name,
        bugs: organizer.bugs,
        _id: organizer._id,
      });
    }
    res
      .status(401)
      .send({ msg: "Invalid combination of username and password" });
    throw new Error("Invalid combination of username and password");
  }
});

// sign out
