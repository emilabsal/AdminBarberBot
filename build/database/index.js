"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const Journal_1 = __importDefault(require("./models/Journal"));
const Client_1 = __importDefault(require("./models/Client"));
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './build/database/database.sqlite'
});
Client_1.default.hasOne(Journal_1.default);
Journal_1.default.belongsTo(Client_1.default)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.sequelize.sync();
}))();
