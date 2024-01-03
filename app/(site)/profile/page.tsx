import { DefaultSession, getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { UserProfile } from '@/profilecomponents/UserProfile/UserProfile';


export default async function Profile() {
    const data = await getServerSession(authOptions);
    const user: DefaultSession["user"] = data?.user
    return (
        // <div>
        //     <h3>Hello, {`${user?.username}`}!</h3>
        //     <h4>Tap an option on sidebar to explore</h4>
        // </div>
     <UserProfile user={data?.user}/>
)}


