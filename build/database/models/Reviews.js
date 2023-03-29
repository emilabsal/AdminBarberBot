"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Reviews extends sequelize_1.Model {
}
Reviews.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Анонимно'
    },
    rating: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    review: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'reviews',
    tableName: 'reviews',
    timestamps: false
});
exports.default = Reviews;
