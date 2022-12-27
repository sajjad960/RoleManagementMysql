import { NextFunction, Request, Response } from "express";
import Categories from "../models/categoryModel";
import Permissions from "../models/permissionModel";
import Products from "../models/productModel";
import UsersRoles from "../models/usersRolesModel";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const createCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {user_id, name} = req.body;
    console.log(req.path);

    //get operation permission
    const serviceType = "create_category";
    const operationPermission = await Permissions.findOne({where: {operation_name: serviceType}})
    
    // get user permission depends on operation permission role
    const userRolesPermission = await UsersRoles.findAll({where: {user_id, role_id: operationPermission?.role_id}});

    if(userRolesPermission?.length < 1) {
      return next(new AppError("Bad Request", 400))
    }

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
    const {user_id, name} = req.body;

    //get operation permission
    const serviceType = "create_product";
    const operationPermission = await Permissions.findOne({where: {operation_name: serviceType}})
    
    // get user permission depends on operation permission role
    const userRolesPermission = await UsersRoles.findAll({where: {user_id, role_id: operationPermission?.role_id}});

    if(userRolesPermission?.length < 1) {
      return next(new AppError("Bad Request", 400))
    }
    
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