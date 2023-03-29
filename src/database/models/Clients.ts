import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class Clients extends Model<InferAttributes<Clients>, InferCreationAttributes<Clients>> {
  declare name: string;
  declare phone: number;
  declare telegram: string;
}

Clients.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  telegram: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'clients',
  tableName: 'clients',
  timestamps: false
}
)

export default Clients