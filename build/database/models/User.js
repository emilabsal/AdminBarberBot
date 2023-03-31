"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class User extends sequelize_1.Model {
}
User.init({
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: false
});
exports.default = User;
