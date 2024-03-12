import express from "express";
import cors from "cors"
import mainRouter from "./routes/index.js"
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.use(express.json())


app.use("/api/v1", mainRouter)

// start server
app.listen(process.env.PORT, ()=>{
    console.log("Server listening")
})
