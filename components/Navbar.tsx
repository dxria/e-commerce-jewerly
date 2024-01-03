"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


export default function Navbar() {
    const pages = ['Home', 'Shop', 'About', 'Contact']
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLink = () => {
        setIsOpen(false);
    }

    return (
        <nav suppressHydrationWarning={true} className='sticky top-0 z-20 bg-[#FFF]'>
            <div className="w-screen px-5 py-4 lg:px-64 flex justify-between space-x-20 lg:space-x-40 shadow-md">
                <div className='flex space-x-4 '>
                    <button onClick={handleClick} className="flex flex-col justify-center items-center">
                        <span className={`bg-rich-bordeaux block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                                ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                        </span>
                        <span className={`bg-rich-bordeaux block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                                ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
                        </span>
                        <span className={`bg-rich-bordeaux block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                                ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                        </span>
                    </button>
                    <Link href="/"><span className='flex items-center text-3xl font-dmserifdisplay font-semibold text-rich-bordeaux'>ATHENA</span>
                        </Link>
                </div>

                <div className="hidden md:flex justify-between items-center border-2 border-rich-bordeaux rounded-md px-3 py-2 w-80 font-raleway text-sm" >
                    <input type='text' name='search' placeholder='Search for your favourite items' className='outline-none' />
                    <label><FaMagnifyingGlass /></label>
                </div>

                <ul className="flex items-center space-x-1">
                    <li className="font-raleway font-semibold text-rich-bordeaux " >
                        <Link href="/profile" className='flex space-x-2 items-center mx-2'>
                            <div><FaUser /></div>
                            <div className='hidden lg:block'>Log in you profile</div>
                        </Link>
                    </li>
                    <li className="font-raleway font-semibold text-rich-bordeaux"> <BsBag /></li>
                </ul>
            </div>
            <div className={`w-screen h-screen absolute z-10 transition-all duration-700 ease-out ${isOpen ? 'block bg-grey-rose/25' : 'hidden'}`}>
                <ul className='w-full md:w-64 lg:w-[30rem] bg-[#FFF] '>
                    <div className="md:hidden flex justify-between items-center border-2 border-rich-bordeaux rounded-md px-3 w-[90%] py-2 m-4 font-raleway text-sm" >
                        <input type='text' name='search' placeholder='Search for yout favourite items' className='outline-none' />
                        <label><FaMagnifyingGlass /></label>
                    </div>
                    {pages.map((page, index) => (
                        <li key={index} className='font-raleway font-semibold lg:pl-[50%] w-full py-4 hover:bg-grey-rose hover:text-[#FFF]'>
                            <Link onClick={handleLink} className='flex justify-between items-center pl-14 pr-4' href={`/${(page.toLowerCase() === 'home' ? '' : page.toLowerCase() === 'shop' ? 'category/all' : page.toLowerCase())}`}>
                                {page}
                                <IoIosArrowForward />
                            </Link>
                        </li>))}
                </ul>
            </div>
        </nav>

    )
}
