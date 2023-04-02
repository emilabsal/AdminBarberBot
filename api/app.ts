import express from 'express'

//initialize
const app = express()


//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello')
})




app.listen(3000)




