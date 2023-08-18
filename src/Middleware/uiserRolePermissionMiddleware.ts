import { Request, Response, NextFunction } from 'express';
import Permissions from '../models/actionHasPermissionModel';
import UsersRoles from '../models/userHasRoleModel';
import AppError from '../utils/AppError';

// export interface AllowedPathMethod {
//   path: string;
//   methods: string[];
// }

const checkUserRolePermission = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {user_id, name} = req.body;
    console.log( req.path, req.method); 

    //get operation permission
    const serviceType = `${req.path}/${req.method.toLocaleLowerCase()}`;
    console.log(serviceType)
    const operationPermission = await Permissions.findOne({where: {operation_name: serviceType}})
    
    // get user permission depends on operation permission role
    const userRolesPermission = await UsersRoles.findAll({where: {user_id, role_id: operationPermission?.role_id}});

    if(userRolesPermission?.length < 1) {
      return next(new AppError("Bad Request", 400))
    }
    next()
  };
};

export default checkUserRolePermission;
