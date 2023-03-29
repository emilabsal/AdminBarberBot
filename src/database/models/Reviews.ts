import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class Reviews extends Model<InferAttributes<Reviews>, InferCreationAttributes<Reviews>> {
  declare name: string;
  declare rating: number;
  declare review: string;
}

Reviews.init({
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Анонимно'
  },
  rating: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'reviews',
  tableName: 'reviews',
  timestamps: false
}
)

export default Reviews