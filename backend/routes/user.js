import express from "express";
import z from "zod";
import { User } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//user signupvalidation
const userSignupValidation = z.object({
  username: z.string().email(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
});

app.post("/signup", async (req, res, next) => {
  try {
    const { username, lastname, firstname, password } = req.body;
    const userBodyValidation = userSignupValidation.safeParse(req.body);

    if ((req.body = "" || !userBodyValidation.success)) {
      return res.status(411).json({ msg: "Incorrect Input fields" });
    }

    const existingUser = await User.findOne({
      username: username,
    });
    console.log(existingUser);

    if (existingUser) {
      return res.status(411).json({ msg: "User already exists" });
    }

    const newUser = await User.create({
      username,
      password,
      lastname,
      firstname,
    });
    console.log(newUser);
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    return res.status(200).json({ msg: "User exists", token });
  } catch (error) {
    next(error);
  }
});

export default app;
