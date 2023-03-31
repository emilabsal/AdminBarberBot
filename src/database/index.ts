import { Sequelize } from "sequelize";
import Journal from "./models/Journal";
import Clients from "./models/Clients";


export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './build/database/database.sqlite'
});




