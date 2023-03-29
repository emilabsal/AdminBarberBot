"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const menu_1 = require("@grammyjs/menu");
exports.menu = new menu_1.Menu('menu')
    .text('Клиентская база').row()
    .text('Заказы').row()
    .text('Статистика').row();
