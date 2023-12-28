import NewArrivals from "@/components/home/NewArrivals";
import Carousel from "@/components/home/Carousel";
import Delivery from "@/components/home/Delivery";
import Feedback from "@/components/home/Feedback/Feedback";
import Maps from "@/components/home/Maps/Maps";
import ConnectToDB from "@/utils/database-connection";
import prisma from "@/utils/prisma-client";
import { NextResponse } from "next/server";


export default async function Home() {

  try {
    await ConnectToDB();
    const addresses = await prisma.address.findMany()
    const jewels = await prisma.jewelry.findMany()
    const feedback = await prisma.feedback.findMany()

    return (
      <main>
        <Carousel />
        <NewArrivals jewels={jewels} />
        <Delivery />
        <Feedback feedback={feedback} />
        <Maps addresses={addresses} />
      </main>
    )
  }
  catch (error) {
    return NextResponse.json({ message: `error connecting to db. ${error}` }, {status: 500 });
  }
}