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
    const createCourse = await Course.create({
        title: req.body.title,
        description: req.body.description
    })
    return res.status(200).json("Course created successfully")
}catch(error){
    next(error)
}
})

app.get("/search", async(req,res,next)=>{
        try{
            const filterWord = req.params.filter  || ""
            const courses = await Course.find({title: filterWord })
            res.status(200).json({courses})
        }catch(error){
            next(error)
        }
})

export default app