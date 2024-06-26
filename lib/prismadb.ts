import { PrismaClient } from '@prisma/client' 
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const dev = process.env.NODE_ENV === 'development'
 // const dev = true

const libsql = createClient({
  url: dev ? 'http://127.0.0.1:8080' : process.env.DATABASE_URL!,
  authToken: dev ? undefined : `${process.env.AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

export default prisma
