import { PrismaClient } from '@prisma/client'
const { client } = new PrismaClient()

export const getAllClients = async () => {
  const clients = await client.findMany()
  console.log(clients)
  return clients
}


