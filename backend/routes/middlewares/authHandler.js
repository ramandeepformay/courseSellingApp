import express from "express";
import jwt from "jsonwebtoken"

const auth = (req,res,next)=>{
    const headers = req.headers;
    
    if(!headers || headers.authorization.startsWith("Bearer ")){
        return res.status("404").json({msg:"Authorization failed"})
    }

    const authorization = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(authorization, JWT_SECRET)
    req.userId = decodedToken.userId
}
export default auth