'use client'

export default function PrivacyHeader() {
    const handleClick =()=> {
        window.location.href = '/contact-us'
    }
    return (
        <header className="bg-[#F8FDF7] flex flex-col w-full items-center justify-center gap-4 py-10" >
            <h1>Privacy Policy</h1>
            <p className="w-4/5 text-center lg:w-[60%] text-sm leading-4 lg:text-xl lg:leading-7.5">Your privacy and data security are fundamental to everything we do at Eezyhealth. We&apos;re committed to transparency in how we handle your information.</p>
            <p  className="border border-headers rounded-sm p-2 cursor-pointer font-inter text-sm font-semibold">Last Updated: August 31, 2025</p>
        </header>
    )
}