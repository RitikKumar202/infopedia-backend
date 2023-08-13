import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  userProfile,
} from "../controllers/userControllers";
import { authGuard } from "../middlewares/authMiddleware";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);

export default router;
