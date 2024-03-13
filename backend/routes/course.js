import express from "express";
import {z} from "zod";
import { Course } from "../db.js";
import auth from "./middlewares/authHandler.js"
const app = express();

const courseValidation = z.object({
    title:z.string(),
    description:z.string()
})
app.post("/create", auth, async (req,res,next)=>{
    try{
    const {success} = courseValidation.safeParse(req.body)
    if(req.body==""||!success){
       return res.status(411).json({msg:"Incorrect Input Fields"})
    }

    const existingCourseName = await Course.findOne({
        title:req.body.title
    })
    if(existingCourseName){
        return res.status(411).json({msg:"Course already exists"})
    }
    return res.status(200).json("Course created successfully")
}catch(error){
    next(error)
}
})

app.get("/search",(req,res,next)=>{
    
})

export default app