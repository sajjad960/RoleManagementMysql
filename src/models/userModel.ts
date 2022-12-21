const Sequelize = require("sequelize");
import { DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

const Users = sequelize.define(
  "users",
  {
    user_name: {
      type: DataTypes.STRING,
    }
  },
  { timestamps: false }
);

export = Users;
