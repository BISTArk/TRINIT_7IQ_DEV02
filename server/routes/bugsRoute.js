import express from "express";
import { createBug, updateThreatLevel, updateStatus, deleteBug, getBug } from "../controllers/bugController.js";

const router = express.Router()

// create new bug
router.route('/create').post(createBug)

// update ThreatLevel
router.route('/updateThreatLevel').put(updateThreatLevel)

// update Status
router.route('/updateStatus').put(updateStatus)

// delete
router.route('/deleteBug/:id').delete(deleteBug)

// get bugs of a particular org
router.route('/getBug').get(getBug)

router.route('/comment').put()

export default router