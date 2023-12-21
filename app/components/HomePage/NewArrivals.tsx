import data from "@/data";
import TitleBox from "./components/TitleBox";
import ShopItems from "@/app/shop/components/ItemsPart/ShopItems";

export default function NewArrivals() {
  const toDate = (str: string) => new Date(str)

  const sortedDesc = data.sort(
    (objA, objB) => Number(toDate(objB.createdAt)) - Number(toDate(objA.createdAt)),
  );

  return (
    <section className="p-10 md:mx-20">
      <TitleBox text="NEW ARRIVALS" />
      <ShopItems data={sortedDesc.slice(0, 3)} />
    </section>

  )
}
