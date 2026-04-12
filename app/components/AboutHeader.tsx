'use client'

import { GiCheckMark } from "react-icons/gi";

export default function AboutHeader() {
    const handleClick =()=> {
        window.location.href = '/contact-us'
    }
    const list = ['Global Accessibility', 'Ultimate Security', 'Simple & Fast', 'True Collaboration']
    return (
        <header className=" w-full pt-16 relative">
            <div className="absolute top-0 left-0 -z-10 w-screen lg:w-475 h-182.5 bg-[#00000062]"/>
            <div className="flex flex-col items-center w-full gap-10">
                <div className="w-full flex-col flex items-center gap-6">
                    <h2 className="text-primary-green! text-lg">About Us</h2>
                    <h1 className="text-xl lg:text-3xl xl:text-5xl text-white">Connecting Care. Empowering Health.</h1>
                    <p className="w-[90%] lg:w-[55%] text-center text-base lg:text-lg text-white">We&apos;re revolutionizing healthcare management by creating seamless connections between patients, providers, and healthcare systems worldwide.</p>
                    <button className="border border-primary-green text-primary-green mt-4 rounded-sm p-2 cursor-pointer" onClick={handleClick}>Contact Us</button>
                </div>
                
                <div className="w-full flex flex-col items-center gap-3 pt-5 bg-white">
                    <h3 className="text-4xl">Our Mission</h3>
                    <p className="w-4/5 lg:w-3/5 lg:text-xl text-sm text-center ">To democratize healthcare access by creating intuitive, secure, and comprehensive digital solutions that connect patients with quality care, anytime, anywhere.</p>

                    <p className="w-4/5 lg:w-3/5 lg:text-xl text-sm text-center ">We believe healthcare should be accessible, affordable, and efficient. Our platform breaks down barriers between patients and providers, enabling better health outcomes through technology.</p>

                    <ul className="w-[95%] lg:w-[70%] flex justify-between items-center mt-10">
                        {list.map((item, index) => (
                            <li key={index} className="flex gap-1 lg:gap-2 items-center"><GiCheckMark className="text-primary-green text-sm md:text-base lg:text-xl" /><p className=" text-[8px] md:text-base lg:text-xl">{item}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}