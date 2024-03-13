import express from "express";
import { z } from "zod";
import { User } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//zod signup validation
const userSignupValidation = z.object({
  username: z.string().email(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
});

//zod signin validation
const userSigninValidation = z.object({
  username: z.string().email(),
  password: z.string(),
});

app.post("/signup", async (req, res, next) => {
  try {
    const { username, lastname, firstname, password } = req.body;
    const userBodyValidation = userSignupValidation.safeParse(req.body);
    console.log(req.body)

    if ((req.body == "" || !userBodyValidation.success)) {
      return res.status(411).json({ msg: "Incorrect Input fields" });
    }

    const existingUser = await User.findOne({
      username: username,
    });

    if (existingUser) {
      return res.status(411).json({ msg: "User already exists" });
    }
    const newUser = await User.create({
      username,
      password,
      lastname,
      firstname,
    });
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    return res.status(200).json({ msg: "User exists", token });
  } catch (error) {
    next(error);
  }
});

app.post("/signin", async (req, res, next) => {
    try{
    const {username, password} = req.body;
    const signInValidation = userSigninValidation.safeParse(req.body)
    
    if(req.body==""|| !signInValidation.success){
        return res.status(411).json({msg:"Incorrect input fields"})
    } 
    
    const existingUser = await User.findOne({
        username:req.body.username
    })
 
    if(!existingUser){
        return res.status(404).json({msg:"User not found"})
    }
    const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
    return res.status(200).json({msg:"User Found", token})
    }catch(err){
        next(err)
    }
});

export default app;
