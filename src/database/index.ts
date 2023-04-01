import { Sequelize } from "sequelize";
import Journal from "./models/Journal";
import Client from "./models/Client";

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './build/database/database.sqlite'
});

Client.hasOne(Journal)
Journal.belongsTo(Client)



  (async () => {
    await sequelize.sync()
  })()




