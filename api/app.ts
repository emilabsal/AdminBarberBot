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
app.get('/', async (req, res) => {
  const record = await prisma.journal.findMany({
    where: {
      id: 'c473d7a1-4358-4299-afa9-707539edb9d5'
    },
    include: {
      client: true
    }
  })
  res.json(record)
})


//server
app.listen(3000)




