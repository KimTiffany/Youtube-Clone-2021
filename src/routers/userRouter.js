import express from "express";
import { edit, see, logout, removeUser } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", removeUser);
userRouter.get(":id", see);

export default userRouter;
