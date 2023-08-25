import express from "express";
const router = express.Router();
import { authGuard } from "../middlewares/authMiddleware";
import { createComment } from "../controllers/commentControllers";

router.post("/", authGuard, createComment);

export default router;
