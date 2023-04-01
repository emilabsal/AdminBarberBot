"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const __1 = require("..");
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isNull: {
                msg: 'Обязательное поле'
            }
        }
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: {
                msg: 'Число'
            }
        }
    },
    telegram: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            checkFirstSymbol(value) {
                console.log(value);
                if (value.substring(0, 1) !== '@') {
                    throw new Error('Алиас должен начинаться с @');
                }
            }
        }
    }
}, {
    sequelize: __1.sequelize,
    modelName: 'client',
    tableName: 'clients',
    timestamps: false
});
exports.default = Client;
