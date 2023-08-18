import { NextFunction, Request, Response } from "express";
import Categories from "../models/categoryModel";
import Permissions from "../models/actionHasPermissionModel";
import Products from "../models/productModel";
import UsersRoles from "../models/userHasRoleModel";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const createCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const doc: object = await Categories.create(req.body);

    // send responce
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const createProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    
    const doc: object = await Products.create(req.body);

    // send responce
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

  // Export
const productController = { createCategory, createProduct };
export = productController;