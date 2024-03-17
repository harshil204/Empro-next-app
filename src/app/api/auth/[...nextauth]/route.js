import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        try {
          const res = await axios.post(`http://localhost:5000/api/user/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });

          const verified = await jwt.verify(
            res?.data?.token,
            process.env.JWT_SECRET
          );

          return (
            { user: verified?.user, token: res?.data?.token } ??
            console.log("Something went wrong")
          );
        } catch (error) {
          console.log("error caught");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.jwt = user.token;
      }

      return token;
    },
    async session({ session, user, token }) {
      session.accessToken = token.jwt;
      user = jwt.verify(token.jwt, process?.env?.JWT_SECRET);
      delete user?.exp;
      delete user?.iat;
      session.user = { ...user };
      return session;
    },
  },
});

export { handler as GET, handler as POST };
