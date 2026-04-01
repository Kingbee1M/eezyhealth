import { FiDownload } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import phone from '@/public/svg/phone.svg'
import Image from "next/image";


export default function HowItWorks() {
    const steps = [
        {icon: <FiDownload/>, title: 'Download & Sign Up', desc: 'Download the MediConnect app and create your secure account with basic information.'},
        {icon: <MdOutlinePersonOutline/>, title: 'Create Your Profile', desc: 'Add your medical history and health preferences for personalized care.'},
        {icon: <LuCalendarRange/>, title: 'Book an Appointment', desc: 'Choose your doctor, select a convenient time, or get connected instantly for urgent care.'},
        {icon: <FaUserDoctor/>, title: 'Talk to a Doctor', desc: 'Connect via video or voice call, receive diagnosis, treatment plan, and prescriptions if needed.'},
    ]
    return (
        <section id="works" className="w-[90%] flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="flex flex-col gap-10 lg:gap-4 items-center lg:items-start">
                <h2>How It Works</h2>
                <p className="text-xl">Get quality healthcare in just a few steps.</p>
                <div className="w-full full flex flex-wrap justify-center lg:justify-start items-center gap-x-12 gap-y-8">
                    {steps.map((step, index)=> (
                        <div key={index} className="flex flex-col items-start w-65 gap-3">
                            <div className="relative">
                                <div className="w-6 h-6 -right-2 rounded-sm absolute bg-primary-green -z-10 rotate-15" />
                                <div className="w-6 h-6 rounded-sm bg-white/30 backdrop-blur-md border border-white/20">{step.icon}</div>
                            </div>

                            <h3 className="text-xl leading-7">{step.title}</h3>

                            <p className="text-base leading-6">{step.desc}</p>

                        </div>
                    ))}
                </div>
            </div>

            <Image src={phone} alt="phone" width={300} height={300}/>
        </section>
    )
}