import express from "express";
const router = express.Router();
import { authGuard, adminGuard } from "../middlewares/authMiddleware";
import {
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postControllers";

router.post("/", authGuard, adminGuard, createPost);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost);

export default router;
