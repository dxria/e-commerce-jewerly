import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import ConnectToDB from "@/database";
import prisma from "@/utils/prisma-client"
import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth";

async function login(credentials: any) {
    try {
        ConnectToDB();
        const user = await prisma.user.findFirst({ 
            where:{ 
                email: credentials.email,
              }
            }
            )
        if (!user) throw new Error("this email doesn't exist.")
        const isCorrect = await bcrypt.compare(credentials.password, user.hashedPassword as string);
        if (!isCorrect) throw new Error("entered password is wrong.")
        return user;
    } catch (error) {
        throw new Error("error while logging in.")
    }
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/login",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    throw new Error("failed to log in")
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

}
