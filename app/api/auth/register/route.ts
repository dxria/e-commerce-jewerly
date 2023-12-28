{/**import connect from "@/dbcontent"
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
*/}

import ConnectToDB from "@/utils/database-connection";
//import connect from "@/utils/db-connection"
//import User from "@/models/User"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import prisma from "@/utils/prisma-client";

export async function POST(req: Request) {
    try {
        await ConnectToDB();
        const { username, email, password } = await req.json();
        const exists = await prisma.user.findFirst({ 
            where:{ OR: [{ email }, { username }]  }
            }
            )
        if (exists) {
            return NextResponse.json({ message: "username or email already exists."}, {status: 500})
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await prisma.user.create({ 
                data: {
                    username, email, hashedPassword }
                });
            return NextResponse.json({ message: "user created."}, {status: 201 });
        }

    } catch (error) {
        return NextResponse.json({ message: `error while register user. ${error}` }, {status: 500 });
    }
}



