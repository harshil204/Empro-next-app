import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req) {
                try {
                    const res = await axios.post(`http://localhost:5000/api/user/login`, {
                        "email": credentials?.email,
                        "password": credentials?.password
                    })
                    console.log("response ==> ", res?.data)
                    const user = res?.data?.user
                    return true
                    // if (user) {
                    //     return user
                    // } else {
                    //     return null
                    // }
                } catch (error) {
                    console.log("error caught")
                }
               
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log("user console from jwt Callback --> ", {user, token})
            if (user) {
              token.username = user.username;
              token.profileImage = user.profileImage;
              token.role = user.role;
              token.id = user.id;
            }
            return token;
          },
        async session({ session, user, token }) {
            console.log("session called ==> ", {session, user, token})
            return session
          },
    }
})


export { handler as GET, handler as POST }