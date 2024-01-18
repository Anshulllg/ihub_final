import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
 session: {
     strategy: "jwt",
 },
 providers: [
   CredentialsProvider({
     type: "credentials",
     credentials: {},
     authorize(credentials, req) {
       const { email, password } = credentials;
       if (email !== "john@gmail.com" || password !== "1234") {
         throw new Error("Invalid credentials");
       }
       return {
         id: "1234",
         name: "John Doe",
         email: "john@gmail.com",
         role: "admin",
       };
     },
   }),
 ],
 pages: {
     signIn: "/auth/login",
     error: '/auth/error',
     signOut: '/auth/signout'
 },
 callbacks: {
     jwt(params) {
         if (params.user?.role) {
             params.token.role = params.user.role;
         }
         return params.token;
     },
     async redirect({ url, baseUrl }) {
         return url.startsWith(baseUrl)
             ? url
             : baseUrl + '/auth/dashboard';
     }
 },
};

export default NextAuth(authOptions);
