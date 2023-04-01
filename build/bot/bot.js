"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
const grammy_1 = require("grammy");
const conversations_1 = require("@grammyjs/conversations");
const menu_1 = require("./menu");
const User_1 = __importDefault(require("../database/models/User"));
const Client_1 = __importDefault(require("../database/models/Client"));
//Инициализация
dotenv.config();
const bot = new grammy_1.Bot(process.env.BOT_TOKEN);
// sequelize.sync()
// Journal.sync({ force: true })
Client_1.default.sync({ force: true });
//middleware
bot.use((0, grammy_1.session)({ initial: () => ({}) }));
bot.use((0, conversations_1.conversations)());
bot.use(menu_1.menu);
//Вход по паролю
function writePassword(conversation, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findAll({ raw: true });
        const { message } = yield conversation.waitFor('message:text');
        if ((message === null || message === void 0 ? void 0 : message.text) !== user[0].password) {
            yield ctx.reply('Пароль неверен');
        }
        else {
            yield ctx.reply('Навигация по crm системе', { reply_markup: menu_1.menu });
        }
    });
}
bot.use((0, conversations_1.createConversation)(writePassword));
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(`Приветствую, напишите пароль для входа`, { parse_mode: 'HTML' });
    yield ctx.conversation.enter("writePassword");
}));
//обработка других команд
bot.on('message', ctx => ctx.reply('Не понимаю вас('));
bot.catch(err => console.log(err));
bot.start();
