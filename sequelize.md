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
User.sync() //Синхронизация с базой данных или
//Синхронизация всех таблиц
sequelize.sync()
//options
{force: true} //перезаписывать таблицы при изменении моделей
{alter: true} //добавит необходимые изменения 

app.use(express.json()) //переводить данные для sequelize в json

```

### Model methods
```js
//Добавить в базу данных
const user = User.build({name: 'Emil', age: 28}) //создать данные
await user.save() //сохранить данные

const user = User.create({ //добавить в базу данных напрямую
  first_name: req.body.name
}) 

//get data
user.toJSON()
JSON.stringify(user)

//Изменение данных строки
user.name = 'Ivan'
user.set({
  name: 'Ivan',
  age: 30
})

await user.save()
//или
await user.update({name: 'Ivan'})

//Удаление строки
await user.destroy()

//Перезагрузка
await user.reload()


User.findAll() //прочитать всю таблицу
//options
{raw: true} //только данные
{attributes: ['name', 'age']} //выбранные столбцы 
{attributes: {exclude: ['name']}} //исключения
{where: {id: 2}} //строку с определенным id

User.findOne() //выбрать первые найденные данные
//options
{where: {id: id}} //поиск по id

User.findOrCreate() //найти или создать если не найдено



User.drop() //удалить таблицу
sequelize.drop() //удалить все таблицы
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
    allowNull: false //запрет пустого значения
  },
  firstName: {
    type: DataTypes.STRING, //тип данных
    defaultValue: 'Аноним', //значение по умолчанию
    unique: true //уникальное значение
    field: 'first_name' //название поля в таблице,
    comment: 'Это комментарий' //(mySQL, PostgreSQL)
  },
  newId: {
    model: Person,
    key: 'id'
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  timestamps: false, //без createdAt, updatedAt
  createdAt: false //без createdAt
  updatedAt: false //без updatedAt
})

export default User

```

### DataTypes
```js
STRING //строка (VARCHAR(255))
STRING(1234) //строка (VARCHAR(1234))
STRING.BINARY //строка (VARCHAR BINARY)
TEXT //текст
TEXT('tiny') //tinytext

NUMBER //число
INTEGER //целое число
BIGINT //большое число
FLOAT //с плавающей точкой
DOUBLE //с плавающей точкой
DECIMAL //с плавающей точкой


BOOLEAN //булево значение

DATE //дата
DATEONLY //только дата
DATETIME //дата
NOW //текущая дата
```