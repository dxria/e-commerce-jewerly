import ProductPageCard from '../ProductPageCard';
import getJewels from "@/api/jewels/getJewels"


export default async function UniqueShopItem({ params }: { params: { shopItem: string } }) {
  const jewels = await getJewels()
  const chosenItem = jewels.filter((item: any) => item.slug === params.shopItem)

  return (
      <ProductPageCard product={chosenItem[0]}/>
   
  )
}
