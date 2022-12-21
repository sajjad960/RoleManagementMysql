import { NextFunction, Request, Response } from "express";
import Users from "../models/userModel";
import factory from "./handleFactory";
import catchAsync from "../utils/catchAsync";
import UsersRoles from "../models/usersRolesModel";
import AppError from "../utils/AppError";

const createUser = factory.createOne(Users);
const getUsers = factory.getAll(Users);


const createUserRole = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {user_id, role_id} = req.body;

    // check role already added or not
    const userRole = await UsersRoles.findOne({where: {user_id, role_id}})
    if(userRole) {
      return next(new AppError("Already Exist", 400))
    }

    const doc: object = await UsersRoles.create(req.body);
    // send responce
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const deleteUserRole = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {user_id, role_id} = req.body

    const doc: object = await UsersRoles.destroy({where: {user_id, role_id}});
    console.log(doc);

    // send responce
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });


// Export
const userController = { createUser, getUsers, createUserRole, deleteUserRole };
export = userController;
