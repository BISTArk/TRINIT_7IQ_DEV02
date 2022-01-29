import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./database/user.js";
import connectDatabase from "./configurations/databaseconfig.js";
import User from "./models/userModel.js";
dotenv.config();

await connectDatabase();

// Import data
const importData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log("Data Imported");

    process.exit();
  } catch (error) {
    console.log(`Error:${error}`);
    process.exit(1);
  }
};

// Delete all data
const deleteData = async () => {
  try {
    await User.deleteMany();

    console.log("Data deleted");

    process.exit();
  } catch (error) {
    console.log(`Error:${error}`);
    process.exit(1);
  }
};

// Calling import and delete functions
if (process.argv[2] === "-del") {
  deleteData();
} else {
  importData();
}
