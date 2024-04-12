// auth.ts
import Resend from 'next-auth/providers/resend'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from './lib/prismadb'

export const { auth, handlers } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.EMAIL_FROM,
      id: 'resend',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})
