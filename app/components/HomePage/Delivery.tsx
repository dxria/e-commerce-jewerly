import { IoDiamond } from "react-icons/io5";

export default function Delivery() {
  return (
    <section className="w-5/6 text-center m-auto p-5 lg:flex lg:place-content-around items-center text-2xl text-rich-bordeaux border-rich-bordeaux border-2">
        <div className="p-5 font-bold">Free delivery for order cost over 200$</div>
        <div className="p-5 flex justify-center"><IoDiamond /></div>
        <div className="p-5 ">Worldwide delivery</div>
    </section>
  )
}
