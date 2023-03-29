## Создание sequelize
```js
//index.js
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.db',
  host: 'localhost'
});
```

## Работа с API
```js
import { sequelize } from './database/index.js'
//app.js
//Создание таблицы
User.sync() //синхронизация с базой данных или
//инициализация
sequelize.sync()
//options
{force: true} //перезаписывать таблицы при изменении моделей
{alter: true} //добавит необходимые изменения 

app.use(express.json()) //переводить данные для sequelize в json


```

### Model methods
```js
User.findAll() //найти все
//options
{raw: true} //только данные

User.findOne() //выбрать определенные данные
//options
{where: {id: id}} //поиск по id

User.create({ //добавить в базу данных
  first_name: req.body.name
}) 
```

## Model
```js
import { Model, DataTypes } from 'sequelize';
import { sequelize } from "..";

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  timestamps: false, //без createdAt, updatedAt
})

export default User

```