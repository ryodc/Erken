import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required: true,
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

    verzorgerirstname: {
      type: String,
      required: false,
    },
    verzorgerlastname: {
      type: String,
      required: false,
    },
    verzorgeremail: {
      type: String,
      required: false,
    },
    verzorgerphone: {
      type: String,
      required: false,
    },
    verzorgerpassword: {
      type: String,
      required: false,
    },    
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);