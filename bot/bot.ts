import * as dotenv from 'dotenv';
import { Bot, Context, session } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";
import { menu } from './menu';
import { getAdminPassword } from '../prisma';


//types
type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

//instance
dotenv.config();
const bot = new Bot<MyContext>(process.env.BOT_TOKEN!);

//middleware
bot.use(session({ initial: () => ({}) }));
bot.use(conversations());
bot.use(menu);

//password conversation
async function writePassword(conversation: MyConversation, ctx: MyContext) {
  const { message } = await conversation.waitFor('message:text')
  const password = await getAdminPassword()
  console.log(password);


  if (message?.text !== 'Пароль') {
    await ctx.reply('Пароль неверен')
  } else {
    await ctx.reply('Навигация по crm системе', { reply_markup: menu })
  }
}
bot.use(createConversation(writePassword));


//start
bot.command("start", async (ctx) => {
  await ctx.reply(`Приветствую, напишите пароль для входа`, { parse_mode: 'HTML' })
  await ctx.conversation.enter("writePassword");
});


//обработка других команд
bot.on('message', ctx => ctx.reply('Не понимаю вас('))


bot.catch(err => console.log(err))
bot.start();