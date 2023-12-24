import Item from "./Item";

type ShopItemsProps = {
  data: {
    title: string;
    slug:string;
    description: string;
    price: number;
    category: string;
    img: string;

  }[];
};

export default function ShopItems({ data }: ShopItemsProps) {
  return (
    <section className="flex flex-wrap justify-start content-center">
      {data?.map((product, index) => (
        <Item key={index} item={product} />
      ))}
    </section>
  );
}
