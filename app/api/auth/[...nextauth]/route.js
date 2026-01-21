import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
    
  ],
})

export { handler as GET, handler as POST }

// export async function GET(request) {}
 
// export async function HEAD(request) {}
 
// export async function POST(request) {}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}