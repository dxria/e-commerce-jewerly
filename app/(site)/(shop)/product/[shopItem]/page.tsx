import ProductPageCard from '../ProductPageCard';
import ConnectToDB from "@/database";
import prisma from "@/utils/prisma-client";
import { NextResponse } from "next/server";


export default async function UniqueShopItem({ params }: { params: { shopItem: string } }) {
  try {
    await ConnectToDB();
    const jewels = await prisma.jewelry.findMany()
    const chosenItem = jewels.filter((item: any) => item.slug === params.shopItem)
    return (
      <ProductPageCard product={chosenItem[0]} />
    )
  }
  catch (error) {
    return NextResponse.json({ message: `error connecting to db. ${error}` }, { status: 500 });
  }
}