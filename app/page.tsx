import NewArrivals from "@/homecomponents/NewArrivals";
import Carousel from "@/homecomponents/Carousel";
import Delivery from "@/homecomponents/Delivery";
import Feedback from "@/homecomponents/Feedback/Feedback";
import Maps from "@/homecomponents/Maps/Maps";
import feedback from "@/feedback";

export default function Home() {
  return (
    <main>
      <Carousel/>
      <NewArrivals />
      <Delivery/>
      <Feedback feedback={feedback}/>
      <Maps />
    </main>
  )
}
