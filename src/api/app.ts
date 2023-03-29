import express from 'express'
import { sequelize } from '../database'
import User from '../database/models/User'
import Clients from '../database/models/Clients'
import Journal from '../database/models/Journal'

//initialize
sequelize.sync()
const app = express()

//middleware
app.use(express.json())

//api
app.post('/users', (req, res) => {
  console.log(req.body);

  User.create(req.body).then(() => {
    res.send('done')
  })

})

app.get('/clients', (req, res) => {
  const journal = Journal.findAll({ raw: true })
  res.send(journal)
})

app.get('/', (req, res) => {
  res.send('hello')
})





app.listen(3000)


