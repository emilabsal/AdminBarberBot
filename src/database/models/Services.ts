import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class Services extends Model<InferAttributes<Services>, InferCreationAttributes<Services>> {
  declare service: string;
}

Services.init({
  service: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'services',
  tableName: 'services',
  timestamps: false
}
)

export default Services