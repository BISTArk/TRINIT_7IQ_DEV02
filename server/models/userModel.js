import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    employee: {
      type: String,
      enum: ["s", "a", "b", "x"],
      default: "x",
    },
    bugs: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Bugs",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.passwordVerification = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(7);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
