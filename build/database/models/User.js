"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class User extends sequelize_1.Model {
}
User.init({
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'user',
    timestamps: false
});
exports.default = User;
