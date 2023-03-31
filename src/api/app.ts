import express from 'express'
// import { sequelize } from '../database'
import User from '../database/models/User'
import Clients from '../database/models/Clients'
import { sequelize } from '../database'

//initialize
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

app.get('/reviews', (req, res) => {
  const reviews = Clients.findAll({ raw: true })
  res.send(reviews)
})

app.get('/', (req, res) => {
  res.send('hello')
})




sequelize.sync()
app.listen(3000)




