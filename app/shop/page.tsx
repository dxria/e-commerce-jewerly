"use client"
import data from "@/data"
import ShopItems from '@/shopcomponents/ItemsPart/ShopItems';


// type ShopProps = {
//     data: {
//         title: string;
//         description: string;
//         price: number;
//         category: string;
//         img: string;
//     }[];
// };
//{ data }: ShopProps
export default function ShopPage() {

    return (
        <ShopItems data={data} />
    );

}
