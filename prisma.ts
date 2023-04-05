import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const getAdminPassword = async () => {
  const password = await prisma.user.findUnique({ where: { name: 'Админ' } })
  await prisma.$disconnect()

}

async function main() {


}

// const closeConnect = async () => {
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
// }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })