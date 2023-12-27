"use client"
//import data from "@/data";
import TitleBox from "./TitleBox";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Item from "@/components/shop/ItemsPart/Item";

type JewelsProps = {
  jewels: {
    title: string;
    slug:string;
    description: string;
    price: number;
    category: string;
    img: string;
    createdAt: string,
  }[];
};

export default function NewArrivals( {jewels} : JewelsProps) {
  const toDate = (str: string) => new Date(str)

  const sortedDesc = jewels.sort(
    (objA, objB) => Number(toDate(objB.createdAt)) - Number(toDate(objA.createdAt)),
  );

  return (
    <section className="w-[70%] p-10 m-auto">
      <TitleBox text="NEW ARRIVALS" />

      <Glider
        draggable
        hasArrows
        slidesToShow={1}
        responsive={[
          {
            breakpoint: 864,
            settings: {
              slidesToShow:3,
            },
          },
        ]}
        slidesToScroll={1}
      >
        {sortedDesc.slice(0, 10)?.map((product, index) => (
        <Item key={index} item={product} />
      ))}
      </Glider>
    </section>

  )
}
