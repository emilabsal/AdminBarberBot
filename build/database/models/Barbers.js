"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Barbers extends sequelize_1.Model {
}
Barbers.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    rating: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'barbers',
    tableName: 'barbers',
    timestamps: false
});
exports.default = Barbers;
