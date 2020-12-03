import mongoose from "mongoose";
import crypto from "crypto";
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    // required: 'Name is required'
  },
  contact: {
    type: Number,
    trim: true,
    // required: 'contact is required'
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    // required: 'Email is required'
  },
  occupation: {
    type: String,
    required: true,
    enum: ["Student", "Job", "HouseWife", "Business", "Retired", "Other"],
  },
  count: {
    type: Number,
    default: 0,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Form", FormSchema);
