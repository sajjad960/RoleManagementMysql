const Sequelize = require("sequelize");
import { DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

const Products = sequelize.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
    },
},
{ timestamps: false }
)

export = Products;
