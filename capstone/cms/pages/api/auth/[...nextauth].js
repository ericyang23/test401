// Starter code from NextAuth official website
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // List of authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
        }
    })
  ],
  jwt: {
      encryption: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account }) {
        // OAuth access_token: passed to token after signin
        if (account) {
            token.accessToken = account.access_token
        }
        return token
    },
    async session({ session, token, user }) {
        // Send properties to the client
        session.accessToken = token.accessToken
        return session
    }
  }
}

export default NextAuth(authOptions)