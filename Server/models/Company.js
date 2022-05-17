import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema(
  {
    companyname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    postalcode: {
      type: String,
      required: true,
    },
    housenumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Company", CompanySchema);