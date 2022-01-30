import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Organizer from "../models/organizerModel.js";
import Bugs from "../models/bugModel.js";

// POST new bug
export const createBug = expressAsyncHandler(async (req, res) => {
  const { title, content, authorName, authorIsUser } = req.body;
  if (!authorName) {
    res.status(401).send({ msg: "Unauthorized access." });
    throw new Error("Unauthorized access.");
  }

  const newBug = await Bugs.create({
    title,
    content,
    author: { name: authorName, isUser: authorIsUser },
  });
  if (newBug) {
    res.status(201).json(newBug);
  } else {
    res.status(401).send({ msg: "Something is wrong. Please retry." });
    throw new Error("Something is wrong. Please retry.");
  }
});

// PUT update threatLevel
export const updateThreatLevel = expressAsyncHandler(async (req, res) => {
  const { bug_id, employee_id, status } = req.body;
  const bug = await Bugs.findOne({ _id: bug_id });
  if (!bug) {
    res.status(401).send({ msg: "Bug does not exist" });
    throw new Error("Bug does not exist");
  }
  const bugSearch = async (org_id) => {
    const org = await Organizer.findOne({ _id: org_id });
    return !org.bugs.some(bug_id);
  };
  const employee = await User.find({ _id: employee_id });
  if (!bugSearch(employee.organization) || employee.role != "a") {
    res.status(401).send({ msg: "Unauthorized access" });
    throw new Error("Unauthorized access");
  }

  bug.threatLevel = threatLevel;
  const update = await bug.save();
  if (update) {
    res.json(update);
  } else {
    res.status(401).send({ msg: "No bug found." });
    throw new Error("No bug found.");
  }
});

// PUT update status
export const updateStatus = expressAsyncHandler(async (req, res) => {
  const { bug_id, employee_id, status } = req.body;
  const bug = await Bugs.findOne({ _id: bug_id });
  if (!bug) {
    res.status(401).send({ msg: "Bug does not exist" });
    throw new Error("Bug does not exist");
  }
  const bugSearch = async (org_id) => {
    const org = await Organizer.findOne({ _id: org_id });
    return !org.bugs.some(bug_id);
  };
  const employee = await User.find({ _id: employee_id });
  if (
    !bugSearch(employee.organization) ||
    bug.threatLevel > employee.employeeLevel
  ) {
    res.status(401).send({ msg: "Unauthorized access" });
    throw new Error("Unauthorized access");
  }
  bug.status = status;
  const update = await bug.save();
  if (update) {
    res.json(update);
  } else {
    res.status(401).send({ msg: "No bug found." });
    throw new Error("No bug found.");
  }
});

// DELETE bug
export const deleteBug = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await Bugs.findByIdAndRemove(id);
  if (success) {
    res.json({ message: "Bug deleted successfully." });
  } else {
    res.status(404);
    throw new Error("Error");
  }
});

// GET bug
export const getBug = expressAsyncHandler(async (req, res) => {
  const bugs = await Bugs.find({});
  if (bugs) {
    res.json(bugs);
  } else {
    res.status(404);
    throw new Error("Error");
  }
});

// PUT comment
export const putComment = expressAsyncHandler(async (req, res) => {
  const comment = {
    commentMessage: req.body.comment,
    commentBy: req.user.id,
  };
  Bugs.findByIdAndUpdate(
    req.body.bug_id,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.commentBy", "username _id")
    .exec((err, result) => {
      if (err) {
        return res.status(401).json({ error: err });
      } else {
        console.log("success");
        res.json(result);
      }
    });

});
