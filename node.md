```js
global //global object like window in browser
```

## FILESYSTEM
```js
const fs = require('fs')
import fs from 'fs'

//ПАПКИ И ФАЙЛЫ
//папки
fs.mkdir('./assets', (err) => {}) //создать папку
fs.mkdirSync('./assets', (err) => {}) //создать папку если не существует
fs.rmdir('./assets', (err) => {}) //удалить папку
fs.rmdirSync('./assets', err => {}) //удалить папку если существует

//папки и файлы
fs.existsSync('./assets') //проверка на существование папки или файла

//файлы
fs.unlink('./text.txt', (err) => {}) //удалить файл
fs.readFile('./text.txt', (err, data) => {}) //прочитать файл
fs.writeFile('./text.txt', 'text to write', () => {}) //записать в файл

//СТРИМЫ 
//получение данных до их полной загрузки
const readStream = fs.createReadStream('./text1.txt', {encoding: 'utf8'})
//чтение по частям
readStream.on('data', chunk => {})
//запись через стрим
const writeStream = fs.createWriteStream('./text2.txt')
writeStream.write('text') //внутри readStream
//прочитать и записать
readStream.pipe(writeStream)
```

```js
//Path
__filename //путь до файла
__dirname //путь до папки
```

## PACKAGES
nodemon - сервер с автоматической перезагрузкой
express - фреймворк для сервера

## MODULES
```js
//jsc (js core)
//import
//module
const moduleName = require('./module.js')
//get modules
const modules = require('./module.js')
//modules.module1, modules.module2
//or
const { module1, module2 } = require('./module.js')

//export
module.exports = moduleName
module.exports = { module1, module2 }

//es6
//package.js
"type": "module"

//export default
import module from './module' 
//module.js
export default module

//export
import { module } from './module' 
//module.js
export const module = ...
```

## HTTP
```js
const http = require('http')
const server = http.createServer((req, res) => {})
server.listen(3000, 'localhost', () => {})
```

## EXPRESS.JS
```sh
npm i express
```
```js
//import
const express = require('express')

//instance
const app = express()

//listen for requiests
app.listen(3000)

//get
app.get('/', (req, res) => {
  res.send('<b>Hello</b>') //send body
  res.sendFile(path, {root: __dirname}) //send file
  res.render('about') //render page
  res.redirect(anotherPath) //redirect
  res.status(200) //send status
})

//404 page or any other request
app.use((req, res) => {
  res.sendFile(path, {root: __dirname})
})

//routes
//creating
const router = express.Router() 
//export
module.exports = router
//import 
const blogRoutes = require('./routes/blogRoutes')
//using in app.js
app.use('/blogs', blogRoutes) 

```

## MIDDLEWARE
```js
app.use((req, res, next) => {
  next() //if we don't send response, use next
})
```