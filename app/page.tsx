import NewArrivals from "@/components/home/NewArrivals";
import Carousel from "@/components/home/Carousel";
import Delivery from "@/components/home/Delivery";
import Feedback from "@/components/home/Feedback/Feedback";
import Maps from "@/components/home/Maps/Maps";
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
