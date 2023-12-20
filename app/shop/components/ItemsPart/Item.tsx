import React from 'react'
import Image from 'next/image'

type ItemProps = {
    item: {
        title: string,
        description: string,
        price: number,
        category: string,
        img: string
    }

}
export default function Item({item}: ItemProps) {
        return (
    
            <div className="w-80 m-11 lg:m-7 lg:mt-12 p-6 border-2 border-rich-bordeaux">
                <Image alt="item" src={item.img} width={500} height={500} className="border-2 border-rich-bordeaux mb-2" />
                <div className="flex justify-between">
                    <h4 className="uppercase font-raleway font-bold text-lg ">{item.title}</h4>
                    <h4 className="uppercase font-raleway font-bold text-lg">{item.price}$</h4>
                </div>
                <div className="font-raleway text-sm"><b>CATEGORY:</b> {item.category}</div>
                <div className="font-raleway text-sm mt-2">{item.description}</div>
            </div>
        )
    }
