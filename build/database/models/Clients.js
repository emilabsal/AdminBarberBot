"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Clients extends sequelize_1.Model {
}
Clients.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    telegram: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'clients',
    tableName: 'clients',
    timestamps: false
});
exports.default = Clients;
