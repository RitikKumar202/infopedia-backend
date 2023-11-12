import Categories from "../models/Categories";
import Post from "../models/Post";

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const postCategory = await Categories.findOne({ name });

    if (postCategory) {
      const error = new Error("Category is already created!");
      return next(error);
    }

    const newPostCategory = new Categories({
      name,
    });

    const savedPostCategory = await newPostCategory.save();

    return res.status(201).json(savedPostCategory);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const postCategories = await Categories.find({});

    return res.json(postCategories);
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const postCategory = await Categories.findByIdAndUpdate(
      req.params.postCategoryId,
      {
        name,
      },
      {
        new: true,
      }
    );

    if (!postCategory) {
      const error = new Error("Category not found");
      return next(error);
    }

    return res.json(postCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.postCategoryId;

    await Post.updateMany(
      { categories: { $in: [categoryId] } },
      { $pull: { categories: categoryId } }
    );

    await Categories.deleteOne({ _id: categoryId });

    res.send({
      message: "Post category is successfully deleted!",
    });
  } catch (error) {
    next(error);
  }
};

export { createCategory, getAllCategories, updateCategory, deleteCategory };
