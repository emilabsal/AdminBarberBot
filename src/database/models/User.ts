import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from "..";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare password: string;
}

User.init({
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  timestamps: false
}
)



export default User