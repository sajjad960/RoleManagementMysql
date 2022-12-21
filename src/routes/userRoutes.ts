import express from "express";

// controller
import userController from "../controllers/userController";

const router = express.Router();

// router.route("/").get(userController.getUsers).post(userController.createUser);

router.route("/manage-users/role-management").post(userController.createUserRole).delete(userController.deleteUserRole)

//Declare router as a userRouter
const userRouter = router;

export = userRouter;
