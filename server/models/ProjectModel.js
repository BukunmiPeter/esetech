import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    decription: {
      type: String,
      required: true,
    },
    img: {
     type: [String],
    }
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);