"use client"
import data from "@/data.js"
import { usePathname } from 'next/navigation';
import ShopItems from "./../components/ItemsPart/ShopItems";

export default function CategoryItems() {
  const pathname = usePathname();
  const activeCategory = pathname.substring(6)

  const filteredItems = (activeCategory === 'All'
    ? data
    : data.filter((item) => item.category === activeCategory))

  return (
    <div>
      <ShopItems data={filteredItems} />
    </div>
  )
}

