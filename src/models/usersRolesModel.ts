const Sequelize = require("sequelize");
import { DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

const UsersRoles = sequelize.define('users_roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "role_id_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'users_roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "role_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });

export = UsersRoles;
