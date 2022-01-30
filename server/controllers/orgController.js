import User from "../models/userModel.js";
import Organizer from "../models/organizerModel.js";
import expressAsyncHandler from "express-async-handler";

// POST sign up user
export const getallOrg = expressAsyncHandler(async (req, res) => {
    
  const orgs = await Organizer.find({});
  if (orgs) {
    res.status(401).json({ orgs });
    throw new Error("This username is already taken.");
  }else {
    res.status(401).send({ msg: "Something is wrong. Please retry." });
    throw new Error("Something is wrong. Please retry.");
  }
});