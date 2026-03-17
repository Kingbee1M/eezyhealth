'use client'
import logo from '@/public/svg/logo.svg'
import Image from 'next/image'
import { IoMdMenu, IoMdClose} from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
    const navs = [
        {title: 'Home', link: '/'},
        {title: 'How it works', link: '/'},
        {title: 'FAQS', link: '/'},
        {title: 'About Us', link: '/about-us'},
        {title: 'Contact Us', link: '/'},
    ]
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={`
        w-screen fixed top-0 left-0 z-20 bg-nav-bg p-3
        flex flex-col lg:flex-row lg:items-center justify-between
        transition-all duration-300 ease-in-out
        ${isOpen ? 'h-56' : 'h-12'} 
        overflow-hidden
        `}>
            <div className='w-full lg:w-1/3 flex justify-between items-center'>
                <Image src={logo} alt='logo' width={20} height={20} className='w-28 lg:w-40' />
                <button onClick={()=>setIsOpen(!isOpen)} className={`inline lg:hidden text-2xl  transition-transform duration-500 ease-in-out
          ${isOpen ? 'rotate-180' : 'rotate-0'}`}>{isOpen? (<IoMdClose/>) : (<IoMdMenu/>)}</button>
            </div>
            
            <ul className=
            {`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
            lg:opacity-100 lg:pointer-events-auto 
            transition-opacity w-2/3 flex flex-col lg:flex-row justify-start gap-2 lg:gap-5 mt-5 lg:mt-0
            `}>
                {navs.map((nav, index) => (
                    <li key={index} className=''>
                        <Link href={nav.link} className='font-inter cursor-pointer'>{nav.title}</Link>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}