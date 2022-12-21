const Sequelize = require("sequelize");
import { DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

const Categories = sequelize.define(
  "categories",
  {
    name: {
      type: DataTypes.STRING,
    },
},
{ timestamps: false }
)

export = Categories;
