import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(process.env.URL);
} catch (error) {
  console.error();
}

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,  
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  admin:{
    type:Boolean,
    default:false
  }
});

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

export const User = mongoose.model('user', userSchema);
export const Course = mongoose.model("course", courseSchema);
