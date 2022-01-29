import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const organizerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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

organizerSchema.methods.passwordVerification = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

organizerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(7);
  this.password = await bcrypt.hash(this.password, salt);
});

const Organizer = mongoose.model("Organizer", organizerSchema);

export default Organizer;
