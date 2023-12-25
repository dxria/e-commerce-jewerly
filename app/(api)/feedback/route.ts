import Feedback from "@/models/Feedback"
import { NextResponse } from "next/server";
import connect from "@/dbcontent"

export const GET = async (request: any) => {
    try {
        await connect();
        const feedback = await Feedback.find();
        return new NextResponse(JSON.stringify(feedback), {status:200});
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, {status: 500})
    }
}

