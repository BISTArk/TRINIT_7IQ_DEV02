import express from "express";
import { signUpUser, signupOrganizer, signInUser, signInOrganizer } from "../controllers/authController.js";

const router = express.Router()

// user sign up
router.route('/signupUser').post(signUpUser)

// organizer sign up
router.route('/signupOrganizer').post(signupOrganizer)

// sign in
router.route('/signinUser').post(signInUser)
router.route('/signinOrganizer').post(signInOrganizer)

export default router