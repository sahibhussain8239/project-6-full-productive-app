import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })

  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider == "github") {
        await connectDB()

        const userEmail = user.email

        // Check if the user already exists in the database
        const currentUser = await User.findOne({ email: userEmail })

        if (!currentUser) {
          //Create a new user
          const newUser = await User.create({
            email: userEmail,
            username: userEmail.split("@")[0],
          })
        }
        return true
      }
    },
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email })
      if (dbUser) {
        session.user.name = dbUser.username
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }