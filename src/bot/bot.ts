import * as dotenv from 'dotenv'
import { Bot, Context, session } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";
import { menu } from './menu';
import { sequelize } from '../database';
import User from '../database/models/User';
import Journal from '../database/models/Journal';
import Client from '../database/models/Client';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

//Инициализация
dotenv.config()
const bot = new Bot<MyContext>(process.env.BOT_TOKEN);
// sequelize.sync()
// Journal.sync({ force: true })
Client.sync({ force: true })



//middleware
bot.use(session({ initial: () => ({}) }));
bot.use(conversations());
bot.use(menu);

//Вход по паролю

async function writePassword(conversation: MyConversation, ctx: MyContext) {
  const user = await User.findAll({ raw: true })
  const { message } = await conversation.waitFor('message:text')

  if (message?.text !== user[0].password) {
    await ctx.reply('Пароль неверен')
  } else {
    await ctx.reply('Навигация по crm системе', { reply_markup: menu })
  }
}

bot.use(createConversation(writePassword));


bot.command("start", async (ctx) => {
  await ctx.reply(`Приветствую, напишите пароль для входа`, { parse_mode: 'HTML' })
  await ctx.conversation.enter("writePassword");
});


//обработка других команд
bot.on('message', ctx => ctx.reply('Не понимаю вас('))


bot.catch(err => console.log(err))
bot.start();