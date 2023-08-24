import express from "express";
const router = express.Router();
import { authGuard, adminGuard } from "../middlewares/authMiddleware";
import { createPost, updatePost } from "../controllers/postControllers";

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);

export default router;
