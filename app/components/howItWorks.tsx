import phone from '@/public/svg/phone.svg'
import Image from "next/image";

import { Icons } from "../UI/Icons";


export default function HowItWorks() {
    const steps = [
        {icon: 'download', title: 'Download & Sign Up', desc: 'Download the MediConnect app and create your secure account with basic information.'},
        {icon: 'people', title: 'Create Your Profile', desc: 'Add your medical history and health preferences for personalized care.'},
        {icon: 'calender', title: 'Book an Appointment', desc: 'Choose your doctor, select a convenient time, or get connected instantly for urgent care.'},
        {icon: 'doctoricon', title: 'Talk to a Doctor', desc: 'Connect via video or voice call, receive diagnosis, treatment plan, and prescriptions if needed.'},
    ]
    return (
        <section id="works" className="w-[90%] flex flex-col lg:flex-row justify-between items-center lg:items-start relative">
            <div className="w-0 h-0 border-t-310 border-t-[#b0c7ab] opacity-20 border-r-1550 border-r-transparent -left-30 absolute" />
            <div className="flex flex-col gap-10 lg:gap-4 items-center lg:items-start z-20">
                <h2>How It Works</h2>
                <p className="text-xl">Get quality healthcare in just a few steps.</p>
                <div className="w-full full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 justify-center lg:justify-start items-center gap-x-12 gap-y-8 mt-8">
                    {steps.map((step, index)=> (
                        <div key={index} className="flex flex-col items-start w-[86%] gap-3">
                            {/* <div className="relative">
                                <div className="w-6 h-6 -right-2 rounded-sm absolute bg-primary-green -z-10 rotate-15" />
                                <div className="w-6 h-6 rounded-sm bg-white/30 backdrop-blur-md border border-white/20">{step.icon}</div>
                            </div> */}
                            <Icons name={step.icon} size='xxs'/>
                            <h3 className="text-xl leading-7">{step.title}</h3>

                            <p className="text-base leading-6">{step.desc}</p>

                        </div>
                    ))}
                </div>
            </div>

            <Image src={phone} alt="phone" width={300} height={300} className="z-20"/>
        </section>
    )
}