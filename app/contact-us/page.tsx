'use client'
import img from "@/public/svg/blood-pressure.svg"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormData((prevData) => ({
        ...prevData,
        [id]: value 
    }));
};
    return(
        <section className="w-[90%] flex justify-between my-12 ">
            <div className="flex flex-col w-9/10 lg:w-2/5 gap-4">
                <h1>Get In Touch</h1>
                <p>Our friendly team would love to hear from you.</p>
                <form className="flex flex-col gap-5 w-full mt-3">
                    <div className="flex gap-2">
                        <div className="inputDiv">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} id="firstName" />
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} id="lastName" />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} id="email" />
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" placeholder="+234 (070) 000-0000" value={formData.phone} onChange={handleChange} id="phone" />
                    </div>


                    <div className="inputDiv">
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Leave us a message..." value={formData.message} onChange={handleChange} rows={5} id="message" />
                    </div>
                </form>

                <div className="flex w-full gap-3">
                    <input type="checkbox" className="w-auto" checked={isChecked} onChange={() => setIsChecked(!isChecked)}  /> <p>you agree to our friendly <Link href={'/privacy-policy'} className="font-inter underline">privacy policy.</Link></p>
                </div>

                <button 
                disabled={!isChecked} 
                className={`px-6 py-2 rounded-lg ${!isChecked ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-green'}`}
                >
                Send Message
                </button>
            </div>
            
            <Image src={img} alt="blood-pressure" width={20} height={20} className="hidden lg:inline w-28 lg:w-2/5" />
                
        </section>
    )
}