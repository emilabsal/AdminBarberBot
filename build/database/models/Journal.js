"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Journal extends sequelize_1.Model {
}
Journal.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    createdAt: sequelize_1.DataTypes.DATE
}, {
    sequelize: __1.sequelize,
    modelName: 'journal',
    tableName: 'journal',
    timestamps: true,
});
exports.default = Journal;
