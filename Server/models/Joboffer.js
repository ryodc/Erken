import mongoose from "mongoose";
const JobofferSchema = new mongoose.Schema(
  {
    jobtitle: {
      type: String,
      required: true,
    },
    jobdescription: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    employment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Joboffer", JobofferSchema);