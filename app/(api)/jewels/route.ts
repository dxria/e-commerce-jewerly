import Jewerly from "@/models/Jewelry"
import { NextResponse } from "next/server";
import connect from "@/dbcontent"

export const GET = async (request: any) => {
    try {
        await connect();
        const jewels = await Jewerly.find();
        return new NextResponse(JSON.stringify(jewels), {status:200});
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, {status: 500})
    }
}

