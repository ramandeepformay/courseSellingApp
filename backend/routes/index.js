import express from "express";
import userRouter from "./user.js"
import ErrorHandler from "./middlewares/errorHandler.js";
const router = express.Router();

router.use("/users", userRouter);

router.use(ErrorHandler)
export default router;
