import { Menu } from '@grammyjs/menu'
import { getAllClients } from '../api/controllers/clients'

export const menu = new Menu('menu')
  .text('Клиентская база', async ctx => {
    const clients = await getAllClients()
    ctx.reply(clients[0].name)
  }).row()
  .text('Заказы').row()
  .text('Статистика').row()



