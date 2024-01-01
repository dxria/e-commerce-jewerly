import ShopItems from '@/components/shop/ItemsPart/ShopItems';
import ConnectToDB from "@/database";
import prisma from "@/utils/prisma-client";
import { NextResponse } from "next/server";


 export default async function CategoryItems({ params, searchParams }: { params: { shopCategory: string }; searchParams: { metal: string | undefined | ''} }) {
    try {
    console.log(params)
    console.log(searchParams)
    await ConnectToDB();
    const jewels = await prisma.jewelry.findMany()
    
    const filt = (params.shopCategory === 'all'
    ? !searchParams.metal 
      ? jewels 
      : jewels.filter((item:any) => item.metal === searchParams.metal)
    : !searchParams.metal 
      ? jewels.filter((item: any) => item.category === params.shopCategory)   
      : jewels.filter((item:any) => item.metal === searchParams.metal && item.category === params.shopCategory))


    // const filteredItems = (params.shopCategory === 'all'
    //   ? jewels
    //   : jewels.filter((item: any) => item.category === params.shopCategory))
    //   const filt = (searchParams.metal ? filteredItems.filter((item:any) => item.metal === searchParams.metal) : filteredItems)

    return (
      <div>  
        <ShopItems data={filt} />
      </div>)
  }
  catch (error) {
    return NextResponse.json({ message: `error connecting to db. ${error}` }, { status: 500 });
  }
}



