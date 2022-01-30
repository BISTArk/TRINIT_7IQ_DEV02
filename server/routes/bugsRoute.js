import express from "express";
import { createBug, updateThreatLevel, updateStatus, deleteBug, getBug, getsomeBug } from "../controllers/bugController.js";
import { getallOrg } from "../controllers/orgController.js";

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
router.route('/getsomeBug').post(getsomeBug)

router.route('/comment').put()

router.route('/getallOrg').get(getallOrg)

export default router