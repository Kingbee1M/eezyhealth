'use client'
import logo from '@/public/svg/logo.svg'
import Image from 'next/image'
import { IoMdMenu, IoMdClose} from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const navs = [
        {title: 'Home', link: '/', internal: true},
        {title: 'How it works', link: '#works', internal: false},
        {title: 'FAQS', link: '#faqs', internal: false},
        {title: 'About Us', link: '/about-us', internal: true},
        {title: 'Contact Us', link: '/contact-us', internal: true},
    ]
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return (
        <nav className={`
        w-full max-w-screen fixed top-0 left-0 z-40 bg-nav-bg p-3
        flex flex-col md:flex-row md:items-center justify-between
        transition-all duration-300 ease-in-out
        px-16
        ${isOpen ? 'h-56' : 'h-10 md:h-12'} 
        overflow-hidden
        `}>
            <div className='w-full lg:w-1/3 flex justify-between items-center'>
                <Link href="/"><Image src={logo} alt='logo' width={20} height={20} className='w-28 md:w-20 xl:w-40' /></Link>
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
                        {nav.internal? (
                        <Link href={nav.link} className={`font-dmSans text-xs md:text-xs xl:text-base cursor-pointer ${pathname === nav.link ? 'text-primary-green' : ''}`}>{nav.title}</Link>
                        ) : (
                            <a href={nav.link} className='font-dmSans text-xs md:text-xs xl:text-base cursor-pointer'>{nav.title}</a>
                        )}
                        
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}