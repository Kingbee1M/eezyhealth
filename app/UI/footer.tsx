'use client'

import logo from "@/public/svg/footerlogo.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FooterSection() {
    const navs = [
        {title: 'Home', link: '/', internal: true},
        {title: 'About Us', link: '/about-us', internal: true},
        {title: 'Contact Us', link: '/contact-us', internal: true},
        {title: 'FAQS', link: '#faqs', internal: false},
        {title: 'Privacy Policy', link: '/privacy-policy', internal: false},
    ]
    const pathName = usePathname() 
    return(
        <footer className="bg-black py-10 gap-6 flex flex-col items-center px-3 md:px-16 w-full max-w-360">
            <Image src={logo} alt="logo" width={70} height={70} className="w-17.5 lg:w-25" />

            <ul className="flex items-center justify-between gap-3 lg:justify-center lg:gap-10 w-full">
                {navs.map((nav, index) => (
                    <li key={index} className=''>
                        {nav.internal? (
                            <Link href={nav.link} className={`font-inter cursor-pointer text-white text-xs ${nav.link === pathName ? 'text-primary-green' : ''}`}>{nav.title}</Link>
                        ) : (
                            <a href={nav.link} className='font-inter cursor-pointer text-white text-xs'>{nav.title}</a>
                        )}
                        
                    </li>
                ))}
            </ul>

            <hr className="bg-[#475467] w-full"/>

            <p className="w-full text-[10px] text-white">© 2025 eezyhealth. All rights reserved.</p>
        </footer>
    )
}