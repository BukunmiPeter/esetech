import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
       lastName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
        bio: {
      type: String,
    },
         img: {
      type: String,
    },
    socialAccount: {
      type: String,
    },
      portfolioWebsite: {
      type: String,
    },
      tagline: {
      type: [String],
    },
       skills: {
      type: [String],
    },
     education: {
      type: [String],
    },
    projects: {
      type: [String],
    },
    workExp: {
      type: [String],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);



