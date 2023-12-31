import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { UserProfile } from '@/profilecomponents/UserProfile/UserProfile';

export default async function ProfileCategory({ params }: { params: { profileCategory: string } }) {
  const data = await getServerSession(authOptions);

  return (
    <div>
      <UserProfile user={data?.user} />

      <div>{params.profileCategory}</div>
    </div>)


}


