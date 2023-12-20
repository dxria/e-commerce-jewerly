import Link from 'next/link'

type Category = {
    category: string,
}    


export default function Category({ category }: Category) {
    return (
        <li
            key={category}
            className={`m-2 px-12 py-1.5 text-center font-raleway font-bold text-lg border-2 
           
                `} >
            <Link href={`/shop/${category}`}>{category}</Link>
        </li>
    )
}

 // ${category === activeCategory 
            //     ? "bg-rich-bordeaux text-[#FFF]" 
            //     : "border-rich-bordeaux"
            //     }
