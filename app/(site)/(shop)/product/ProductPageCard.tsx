import React from 'react'
import Image from 'next/image'
import { BsBag } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";


type ProductPageCardProps = {
    product: {
        title: string,
        slug: string,
        description: string,
        price: number,
        category: string,
        img: string,
        createdAt: Date
    }
}

export default function ProductPageCard({ product }: ProductPageCardProps) {
    if (typeof document !== 'undefined') {
        const dropdownButton = document.getElementById("#dropdownButton")
        const dropdownList = document.getElementById("#dropdownList")
        dropdownButton?.addEventListener("click", () => {
            dropdownList?.classList.toggle("hidden")
        });
    }

    return (
        <section>
            <div className='flex flex-wrap lg:flex-nowrap justify-start md:justify-center space-x-10 lg:space-x-5 lg:items-start'>
                <div className='w-[80%] mt-10 mb-5 m-auto lg:w-[25%] lg:mx-5'>
                    <Image alt="item" src={product.img} width={500} height={500} className="border-2 border-rich-bordeaux mb-2 md:m-auto" />
                </div>
                <div className='w-[80%] m-auto lg:mt-10 lg:w-[40%]'>
                    <h4 className="uppercase font-raleway text-lg ">{product.title}</h4>
                    <h4 className="uppercase font-raleway font-bold text-lg">{product.price}$</h4>
                    <div className='flex justify-between p-2 my-3 m-auto space-x-3 border-y-2 border-grey-rose text-center'>
                        <div className='w-[30%]'>pay with monobank</div>
                        <div className='w-[30%]'>fast delivery</div>
                        <div className='w-[30%]'>pay with privatbank</div>
                    </div>
                    <button className='flex justify-center space-x-2 bg-grey-rose w-[100%] p-2 lg:py-4 mb-3 font-bold text-[#FFF]'>
                        <BsBag />
                        <div>BUY</div>
                    </button>
                    <div> 
                        <div className='flex items-center space-x-5 mb-3 cursor-default' id='dropdownButton'>
                            <div className='font-semibold'>DELIVERY OPTIONS</div>
                            <button><LuPlus /></button>
                        </div>
                        <div className='hidden' id='dropdownList'>
                            <ul>
                                <li>Delivery takes from 1 to 3 working days.</li>
                                <li><b>Delivery by Nova Poshta</b> - 1.5$</li>
                                <li><b>Delivery by courier</b> - 2.5$</li>
                                <li><b>Delivery to Athena shop</b> - 1.5$</li>
                                <li><b>Pick-up in Athena shop</b> - free</li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <h4 className='font-semibold'>DESCRIPTION</h4>
                        <div >{product.description}</div>
                    </div>
                </div>
            </div>


        </section>
    )
}

