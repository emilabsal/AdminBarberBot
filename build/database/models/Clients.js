"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
const Journal_1 = __importDefault(require("./Journal"));
class Clients extends sequelize_1.Model {
}
Clients.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
        unique: true
    },
    telegram: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'clients',
    tableName: 'clients',
    timestamps: false
});
Clients.hasMany(Journal_1.default, {
    sourceKey: "id",
    foreignKey: "id",
    as: "journal",
});
exports.default = Clients;
