import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, Association } from 'sequelize';
import { sequelize } from "..";
import Journal from './Journal';

class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
  declare id: CreationOptional<number>
  declare name: string;
  declare phone: number;
  declare telegram: string | null;
  declare static associations: {
    journal: Association<Client, Journal>;
  };
}

Client.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNull: {
        msg: 'Обязательное поле'
      }
    }
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: true,
    unique: true,
    validate: {
      isNumeric: {
        msg: 'Число'
      }
    }
  },
  telegram: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      checkFirstSymbol(value: string) {
        console.log(value);
        if (value.substring(0, 1) !== '@') { throw new Error('Алиас должен начинаться с @') }
      }
    }
  }
}, {
  sequelize,
  modelName: 'client',
  tableName: 'clients',
  timestamps: false
}
)


export default Client