import connect from "@/dbcontent"
import User from "@/models/User"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
    try {
        await connect();
        const { username, email, password } = await req.json();
        const exists = await User.findOne({ $or: [{ email }, { username }] })
        if (exists) {
            return NextResponse.json({ message: "username or email already exists."}, {status: 500})
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ username, email, password: hashedPassword });
            return NextResponse.json({ message: "user created."}, {status: 201 });
        }

    } catch (error) {
        return NextResponse.json({ message: "error while register user. "}, {status: 500 });
    }
}