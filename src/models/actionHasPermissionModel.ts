const Sequelize = require("sequelize");
import { DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

const Permissions = sequelize.define('action_has_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    operation_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "operation_name_UNIQUE"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'action_has_permissions',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "operation_name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "operation_name" },
        ]
      },
    ]
  });


export = Permissions;
