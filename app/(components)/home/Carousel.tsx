"use client"
import React from 'react'
import Image from 'next/image'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';


export default function Carousel() {
    let slides = [
        {
            text: "",
            img: "https://as1.ftcdn.net/v2/jpg/04/49/01/98/1000_F_449019838_8qXxH8QylhiJoj1899ScimtQ4oN3q5f0.jpg"
        },
        {
            text: "",
            img: "https://as1.ftcdn.net/v2/jpg/06/90/82/30/1000_F_690823016_al6SCiRZqtRaWHNsiARMwxASb71Gmy3J.jpg"
        },
        {
            text: "",
            img: "https://as1.ftcdn.net/v2/jpg/04/46/66/92/1000_F_446669266_qJCYmsK7RbZ93aJE9OMR7MvRCioJfbLP.jpg"
        },

    ]

    return (
        <section className='p-10'>
            <Glider
                draggable
                hasDots
                slidesToShow={1}
                slidesToScroll={1}>
                {slides.map((slide, index) => (

                    <div key={index} className='flex min-w-max m-0 p-0'>
                        <div className='w-[40%]'><Image alt="slider-pic" src={slide.img} width={1220} height={600} /></div>
                        <div className='w-[40%] flex justify-center items-center font-dmserifdisplay font-2xl font-bold'>sample text</div>
                    </div>
                )
                )}
            </Glider>
        </section>

    )
}



