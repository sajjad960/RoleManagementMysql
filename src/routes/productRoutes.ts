import express from "express";

// controller
import productController from "../controllers/productController";

const router = express.Router();

router.route("/").post(productController.createProduct)
router.route("/category").post(productController.createCategory)

const productRouter = router;

export = productRouter;
