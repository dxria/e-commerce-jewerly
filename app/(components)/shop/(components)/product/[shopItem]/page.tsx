import data from '@/data';
import ProductPageCard from '../ProductPageCard';

export default function UniqueShopItem({ params }: { params: { shopItem: string } }) {

  const chosenItem = data.filter((item) => item.slug === params.shopItem)

  return (
      <ProductPageCard product={chosenItem[0]}/>
  )
}
