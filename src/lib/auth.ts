import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { gql, request } from "graphql-request";
import { iUser } from "@/interfaces/iUser";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
    signOut: "/",
  },
  jwt: {
    maxAge: 60 * 60, // 1H,
  },
  secret: process.env.NEXT_AUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const url = `${process.env.NEXT_PUBLIC_API_URL as string}/graphql/`;

        const query = gql`
          query{
            user(email: {eq: "${credentials.email}"}) {
              id
              email
              name
            }
        `;

        const response: iUser[] = await request(url, query);

        if (response.length === 0) {
          return null;
        }

        console.log("response", response);
      },
    }),
  ],
};
