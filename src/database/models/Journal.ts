import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey, CreationOptional, NonAttribute } from 'sequelize';
import { sequelize } from "..";
import Clients from './Clients';

class Journal extends Model<InferAttributes<Journal>, InferCreationAttributes<Journal>> {
  declare id: CreationOptional<number>
  declare clientsId: ForeignKey<Clients['id']>; //первичный ключ связанной таблицы
  declare clients?: NonAttribute<Clients>;
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

Journal.belongsTo(Clients, { targetKey: 'id' })

export default Journal