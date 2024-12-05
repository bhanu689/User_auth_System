import express from "express";
import { authController } from "../Controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/login").post(authController.login);

authRouter.route("/register").post(authController.register);

export { authRouter };