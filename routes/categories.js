const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);

categoriesRouter.get("/category/:id", findCategoryById, sendCategoryById);

categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
