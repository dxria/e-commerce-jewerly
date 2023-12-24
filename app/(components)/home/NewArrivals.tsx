"use client"
import data from "@/data";
import TitleBox from "./components/TitleBox";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Item from "@/shopcomponents/(ItemsPart)/Item";

export default function NewArrivals() {
  const toDate = (str: string) => new Date(str)

  const sortedDesc = data.sort(
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
