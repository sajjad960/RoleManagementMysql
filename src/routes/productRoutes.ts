import express from "express";

// controller
import productController from "../controllers/productController";
import checkUserRolePermission from "../Middleware/uiserRolePermissionMiddleware";

const router = express.Router();



router.route("/products").post(checkUserRolePermission(),productController.createProduct)
router.route("/category").post(checkUserRolePermission(), productController.createCategory)

const productRouter = router;

export = productRouter;
