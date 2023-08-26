import express from "express";
const router = express.Router();
import { authGuard } from "../middlewares/authMiddleware";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentControllers";

router.post("/", authGuard, createComment);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

export default router;
