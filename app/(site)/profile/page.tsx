import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { UserProfile } from '@/profilecomponents/UserProfile/UserProfile';


export default async function Profile() {
    const data = await getServerSession(authOptions);

    return (
    <UserProfile user={data?.user}/>
)}


