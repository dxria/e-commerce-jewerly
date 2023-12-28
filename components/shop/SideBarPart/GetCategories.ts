import ConnectToDB from "@/database";
import prisma from "@/utils/prisma-client";
import { NextResponse } from "next/server";

export default async function GetCategories() {
    try {
        await ConnectToDB();
        const jewels = await prisma.jewelry.findMany()
        return jewels;
    }
    catch (error) {
        return NextResponse.json({ message: `error connecting to db. ${error}` }, { status: 500 });
    }
}
