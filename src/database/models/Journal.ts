import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey, CreationOptional, NonAttribute } from 'sequelize';
import { sequelize } from "..";
import Client from './Client';

class Journal extends Model<InferAttributes<Journal>, InferCreationAttributes<Journal>> {
  declare id: CreationOptional<number>
  declare clientId: ForeignKey<Client['id']>; //первичный ключ связанной таблицы
  declare client?: NonAttribute<Client>;
  declare createdAt: CreationOptional<Date>
}

Journal.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  createdAt: DataTypes.DATE
}, {
  sequelize,
  modelName: 'journal',
  tableName: 'journal',
  timestamps: true,
})


export default Journal