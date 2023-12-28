import ShopItems from '@/components/shop/ItemsPart/ShopItems';
import ConnectToDB from "@/database";
import prisma from "@/utils/prisma-client";
import { NextResponse } from "next/server";


export default async function CategoryItems({ params }: { params: { shopCategory: string } }) {
  try {
    await ConnectToDB();
    const jewels = await prisma.jewelry.findMany()
    const filteredItems = (params.shopCategory === 'all'
      ? jewels
      : jewels.filter((item: any) => item.category === params.shopCategory))

    return (
      <div>
        <ShopItems data={filteredItems} />
      </div>)
  }
  catch (error) {
    return NextResponse.json({ message: `error connecting to db. ${error}` }, { status: 500 });
  }
}



