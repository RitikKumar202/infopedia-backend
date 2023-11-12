import express from "express";
const router = express.Router();
import { authGuard, adminGuard } from "../middlewares/authMiddleware";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/categoriesControllers";

router
  .route("/")
  .post(authGuard, adminGuard, createCategory)
  .get(getAllCategories);

router
  .route("/:postCategoryId")
  .put(authGuard, adminGuard, updateCategory)
  .delete(authGuard, adminGuard, deleteCategory);

export default router;
