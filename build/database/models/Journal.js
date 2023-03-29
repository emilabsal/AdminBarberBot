"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Journal extends sequelize_1.Model {
}
Journal.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
}, {
    sequelize: __1.sequelize,
    modelName: 'journal',
    tableName: 'journal',
    timestamps: true
});
exports.default = Journal;
