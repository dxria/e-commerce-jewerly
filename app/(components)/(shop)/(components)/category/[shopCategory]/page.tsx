import ShopItems from '@/shopcomponents/(ItemsPart)/ShopItems';
import getJewels from "@/api/jewels/getJewels"

export default async function CategoryItems({ params }: { params: { shopCategory: string } }) {
  const jewels = await getJewels()
  const filteredItems = (params.shopCategory === 'all'
    ? jewels
    : jewels.filter((item: any) => item.category === params.shopCategory))

  return (
    <div>
      <ShopItems data={filteredItems} />
    </div>
  )

}