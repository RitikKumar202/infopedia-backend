import { Schema, model } from "mongoose";

const CategoriesSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Categories = model("Categories", CategoriesSchema);
export default Categories;
