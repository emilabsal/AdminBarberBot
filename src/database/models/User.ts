import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare password: string;
}

User.init({
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
}
)

export default User