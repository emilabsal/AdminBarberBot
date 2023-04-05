import express from 'express'
import { PrismaClient } from '@prisma/client'
import clientsRoutes from './routes/clients'

const prisma = new PrismaClient()

//initialize
const app = express()

//middleware
app.use(express.json())
app.use('/api/clients', clientsRoutes)

app.get('/journal', async (req, res) => {
  const barber = await prisma.journal.findMany({
    select: {
      service: true
    },
  })

  res.json(barber)
})

//routes
app.get('/', (req, res) => {
  res.send('hello')
})


//server
app.listen(3000)




