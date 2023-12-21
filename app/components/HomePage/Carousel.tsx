"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


type Carouselprops = {
    slides:{
        text:string,
        img: string,
    }[]
}


export default function Carousel({ slides }: Carouselprops) {
    let [current, setCurrent] = useState<number>(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="max-h-96 w-[80%] m-auto mt-10 overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-700`}
                style={{ transform: `translateX(-${current * 100}%)`, }}>

                {slides.map((s, index) => {
                    return (
                        <Image key={index} alt="slider-pic" src={s.img} width={1920} height={600}/>)
                        {/*  <div className='w-full flex justify-center'>
                            <div className='w-[40%]'>
                                 sample text
                             </div> 
                           
                        </div>*/}
                    
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-2xl md:text-3xl text-rich-bordeaux ">
                <button onClick={previousSlide}
                    className='transition ease-in-out delay-150 duration-700 h-full px-4 md:px-8 hover:bg-gradient-to-r from-grey-rose/75 to-grey-rose/0'> <IoIosArrowBack /> </button>
                <button onClick={nextSlide}
                    className='transition ease-in-out delay-150 duration-700 h-full px-4 md:px-8 hover:bg-gradient-to-r from-grey-rose/0 to-grey-rose/75'> <IoIosArrowForward /> </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div onClick={() => { setCurrent(i); }}
                            key={"circle" + i}
                            className={`rounded-full w-2 h-2 md:w-3 md:h-3 cursor-pointer  ${i == current ? "bg-rich-bordeaux/75" : "bg-grey-rose/75"}`}>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}



