import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import connect from "@/dbcontent"
import User from "@/models/User";
import bcrypt from "bcrypt"


async function login(credentials: any) {
    try {
        connect();
        const user = await User.findOne({ email: credentials.email })
        if (!user) throw new Error("this email doesn't exist.")
        const isCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isCorrect) throw new Error("entered password is wrong.")
        return user;
    } catch (error) {
        throw new Error("error while logging in.")
    }
}

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/login",
    },
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

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }