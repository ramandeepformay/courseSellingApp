import express from "express";
import userRouter from "./user.js"
import courseRouter from "./course.js"

import ErrorHandler from "./middlewares/errorHandler.js";
const router = express.Router();

router.use("/users", userRouter);
router.use("/courses", courseRouter)
router.use(ErrorHandler)
export default router;
