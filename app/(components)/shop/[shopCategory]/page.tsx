import ShopItems from '../components/ItemsPart/ShopItems';
import data from '@/data';

export default function CategoryItems({ params }: { params: { shopCategory: string } }) {
  const filteredItems = (params.shopCategory === 'all'
    ? data
    : data.filter((item) => item.category === params.shopCategory))

  return (
    <div>
      <ShopItems data={filteredItems} />
    </div>
  )

}