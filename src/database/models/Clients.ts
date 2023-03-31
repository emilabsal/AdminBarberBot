import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, Association } from 'sequelize';
import { sequelize } from "..";
import Journal from './Journal';

class Clients extends Model<InferAttributes<Clients>, InferCreationAttributes<Clients>> {
  declare id: CreationOptional<number>
  declare name: string;
  declare phone: number;
  declare telegram: string;
  declare static associations: {
    journal: Association<Clients, Journal>;
  };
}

Clients.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: true,
    unique: true
  },
  telegram: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  }
}, {
  sequelize,
  modelName: 'clients',
  tableName: 'clients',
  timestamps: false
}
)

Clients.hasMany(Journal, {
  sourceKey: "id",
  foreignKey: "id",
  as: "journal",
});

export default Clients