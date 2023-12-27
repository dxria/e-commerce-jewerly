import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";


export default function Navbar() {
    const pages = ['Home', 'Shop', 'About', 'Contact']
    return (

        <nav >
            <div className="w-screen py-6 px-5 lg:px-64 flex justify-center space-x-20 lg:space-x-40 shadow-md">
                {/* desktop */}

                <span className='flex items-center text-3xl font-dmserifdisplay font-semibold text-rich-bordeaux'>ATHENA</span>
                <ul className="hidden lg:flex items-center space-x-24">
                    {pages.map((page, index) => (
                        <li key={index} className='font-raleway font-semibold'>
                            <Link href={`/${(page.toLowerCase() === 'home' ? '' : page.toLowerCase() === 'shop' ? 'category/all' : page.toLowerCase())}`}>{page}</Link>
                        </li>
                    )
                    )}
                </ul>
                <ul className="flex items-center space-x-1">
                    <li className="font-raleway font-semibold text-rich-bordeaux" > <Link href="/profile"><FaUser /></Link></li>
                    <li className="font-raleway font-semibold text-rich-bordeaux"> <BsBag /></li>
                </ul>

                {/* mobile-tab */}

                <button className="space-y-1 group lg:hidden">
                    <div className="w-6 h-1 bg-rich-bordeaux"></div>
                    <div className="w-6 h-1 bg-rich-bordeaux"></div>
                    <div className="w-6 h-1 bg-rich-bordeaux"></div>


                    <ul className='bg-[#FFF] w-screen pb-10 absolute z-10 -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
                        <button className="px-10 py-8 relative ml-auto">
                            <div className="w-6 h-1 rotate-45 absolute bg-rich-bordeaux"></div>
                            <div className="w-6 h-1 -rotate-45 absolute bg-rich-bordeaux"></div>
                        </button>
                        {pages.map((page, index) => (
                            <li key={index} className='font-raleway font-semibold flex justify-center w-full py-4 hover:bg-grey-rose hover:text-[#FFF]'>
                                <Link href={`/${(page.toLowerCase() === 'home' ? '' : page.toLowerCase())}`}>{page}</Link>
                            </li>
                        ))}

                    </ul>
                </button>
            </div>
        </nav>
    )
}