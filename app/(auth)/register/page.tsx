import Form from "./Form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Register() {
    const session = await getServerSession(authOptions)
    if(session){
        return redirect('/')
    }
    return (
        <Form />
    )
}
