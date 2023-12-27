import Address from "@/models/Address"
import { NextResponse } from "next/server";
import connect from "@/dbcontent"

export const GET = async (request: any) => {
    try {
        await connect();
        const addresses = await Address.find();
        return new NextResponse(JSON.stringify(addresses), {status:200});
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, {status: 500})
    }
}

