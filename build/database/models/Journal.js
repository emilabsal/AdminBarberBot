"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
const Clients_1 = __importDefault(require("./Clients"));
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
Journal.belongsTo(Clients_1.default, { targetKey: 'id' });
exports.default = Journal;
