import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class Barbers extends Model<InferAttributes<Barbers>, InferCreationAttributes<Barbers>> {
  declare name: string;
  declare description: string;
  declare rating: number;
}

Barbers.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.NUMBER,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'barbers',
  tableName: 'barbers',
  timestamps: false
}
)

export default Barbers