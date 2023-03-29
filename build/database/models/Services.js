"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Services extends sequelize_1.Model {
}
Services.init({
    service: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'services',
    tableName: 'services',
    timestamps: false
});
exports.default = Services;
