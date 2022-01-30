import mongoose from "mongoose";

const bugsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String
    },
    deadline: {
      type: Date
    },
    status: {
      type: String,
      enum: ["new", "assigned", "fixed"],
      default: "new"
    },
    threatLevel: {
      type: Number,
      enum: [1, 2, 3, 4],
    },
    author: {
        name: {type: String, required: true},
        isUser: {type: Boolean, required: true},
    },
    comments : [{
      commentMessage: {type: String, required: true},
      commentBy: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
      commentAt: {type: Date, default: Date.now}
  }]
  },
  {
    timestamps: true,
  }
);


const Bugs = mongoose.model("Bugs", bugsSchema);

export default Bugs;
