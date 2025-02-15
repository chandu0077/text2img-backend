import {
  registerUser,
  loginUser,
  userCredits,
  paymentRazorpay,
  verifyRazorPay,
} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";
import express from "express";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);

userRouter.post("/pay-razor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor", userAuth, verifyRazorPay);

export default userRouter;
