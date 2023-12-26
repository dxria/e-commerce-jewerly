import NewArrivals from "@/homecomponents/NewArrivals";
import Carousel from "@/homecomponents/Carousel";
import Delivery from "@/homecomponents/Delivery";
import Feedback from "@/homecomponents/Feedback/Feedback";
import Maps from "@/homecomponents/Maps/Maps";
import getAddresses from "@/api/addresses/getAddresses"
import getFeedback from "@/api/feedback/getFeedback"
import getJewels from "@/api/jewels/getJewels"



export default async function Home() {
  const addresses = await getAddresses()
  const feedback = await getFeedback()
  const jewels = await getJewels()
  return (
    <main>
      <Carousel/>
      <NewArrivals jewels={jewels}/>
      <Delivery/>
      <Feedback feedback={feedback}/>
      <Maps addresses={addresses}/>
    </main>
  )
}
