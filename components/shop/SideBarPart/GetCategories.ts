import ConnectToDB from "@/database";
import prisma from "@/utils/prisma-client";
import { NextResponse } from "next/server";

export default async function GetCategories() {
    try {
        await ConnectToDB();
        const jewels = await prisma.jewelry.findMany()
        const categories = ['all', ...new Set(jewels?.map((item:any) => item.category))] as string[];
        return categories;
    }
    catch (error) {
        NextResponse.json({ message: `error connecting to db. ${error}` }, { status: 500 });
    }
}
