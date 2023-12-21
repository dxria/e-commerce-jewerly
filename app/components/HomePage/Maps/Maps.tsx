import adresses from "@/adresses";
import React from 'react'
import TitleBox from '../components/TitleBox'
import ShopAdresses from './ShopAdresses'

export default function Maps() {
    return ( 
        <section className="w-full">
        <TitleBox text="OUR SHOPS" />
            <div className="w-5/6 text-center m-auto lg:mt-12 p-5 lg:flex lg:place-content-around items-center text-xl text-rich-bordeaux border-rich-bordeaux border-2">
                <div className="text-left"><ShopAdresses adresses={adresses}/></div>
                <div>map</div>
            </div>
        </section>
      
    )
}
