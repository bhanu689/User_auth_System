import express from "express";

import { checkAuth } from "../middlewares/auth.middleware.js";
import { userController } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.route("/:id").get(checkAuth, userController.getOne).put(checkAuth,userController.update).delete(checkAuth,userController.delete);



userRouter.route("/reset/:id").patch(checkAuth,userController.updatePassword);
userRouter.route("/logout/:id").post(checkAuth, userController.logout);

export { userRouter };
