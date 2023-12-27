import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { UserProfile } from '@/profilecomponents/UserProfile/UserProfile';


export default async function Profile() {
    const data = await getServerSession(authOptions);

    return (
    <UserProfile user={data?.user}/>
)}


