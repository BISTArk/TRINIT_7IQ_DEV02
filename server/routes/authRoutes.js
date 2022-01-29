import express from "express";
import { signUpUser, signupOrganizer, signIn } from "../controllers/authController.js";

const router = express.Router()

// user sign up
router.route('/signupUser').post(signUpUser)

// organizer sign up
router.route('/signupOrganizer').post(signupOrganizer)

// sign in
router.route('/signin').get(signIn)

export default router