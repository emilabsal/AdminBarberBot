import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()


//Создание новой записи в журнал 
router.post('/', async (req, res) => {
  const body = req.body
  console.log(body);
  // const record = await prisma.journal.create({

  // })
  await prisma.$disconnect()
  // res.status(200).json(record)
})

export default router
