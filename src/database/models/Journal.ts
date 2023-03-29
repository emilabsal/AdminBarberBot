import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class Journal extends Model<InferAttributes<Journal>, InferCreationAttributes<Journal>> {
  declare name: string;
  declare phone: number;
}

Journal.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'journal',
  tableName: 'journal',
  timestamps: true
}
)

export default Journal