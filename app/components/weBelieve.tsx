import Image from "next/image";
import img from '@/public/svg/doctor.svg'

import { Icons } from "../UI/Icons";

export default function WeBelieve() {
    const datas = [
        {title: 'Accessibility', desc: 'Quality healthcare should be available to everyone, regardless of location or economic status.', icon: 'man'},
        {title: 'Security', desc: 'Patient data deserves the highest level of protection with enterprise-grade encryption and compliance.', icon: 'shield'},
        {title: 'Simplicity', desc: 'Healthcare technology should enhance care, not complicate it with intuitive, user-friendly design.', icon: 'lightning'},
        {title: 'Collaboration', desc: 'Better health outcomes happen when patients, doctors, and staff work together seamlessly.', icon: 'hands'},
    ]
    return (
        <section className="w-9/10 flex items-center lg:items-start flex-col mt-20 gap-8">
            <h2>What We Believe</h2>
            <p className="w-full lg:w-1/2 text-center lg:text-left">Building trust in healthcare technology requires more than just compliance—it demands a genuine commitment to the values that healthcare professionals and patients hold dear. These beliefs shape how we approach every challenge and opportunity in our mission to transform healthcare management.</p>

            <div className="w-full flex gap-10 lg:gap-0 flex-col-reverse items-center lg:flex-row-reverse lg:items-center justify-between">
                <Image src={img} alt="doctor" width={100} height={100} className="w-100 lg:w-120 "/>
                <div className="flex flex-col gap-6">
                    { datas.map((data, index) => (
                        <div key={index} className="flex gap-2 items-center w-[80%] ">
                            <Icons name={data.icon} size='md' />
                            <div className="flex flex-col">
                                <h3 className="font-inter">{data.title}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}