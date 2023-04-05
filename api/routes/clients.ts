import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (req, res) => {
  const clients = await prisma.client.findMany()
  await prisma.$disconnect()
  console.log(clients);
  res.status(200).json(clients)
})

export default router
