import { CiCalendar } from "react-icons/ci";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbCalendarWeek } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";


export default function WhyChoose() {
    const datas = [
        {icon: <CiCalendar />, title: "Book Appointments", description: "Find and book appointments with qualified doctors in seconds, not days." },
        {icon: <AiOutlineVideoCamera />, title: "Video & Voice Consultations", description: "Get quality healthcare from the comfort of your home with HD video consultations and crystal-clear voice calls." },
        {icon: <RxCounterClockwiseClock />, title: "24/7 Doctor Availability", description: "Access healthcare whenever you need it with our network of doctors available around the clock." },
        {icon: <TbCalendarWeek />, title: "Flexible Scheduling", description: "Take complete control of your schedule by setting your preferred hours and block time for emergencies." },
        {icon: <GoShieldCheck />, title: "Secure Consultations", description: "Conduct consultations with confidence using HIPAA-compliant video technology." },
        {icon: <HiOutlineSquares2X2 />, title: "Clinic Management Tools", description: "Manage your entire practice from one comprehensive dashboard. Patient records, appointment scheduling" },
    ]
    return (
        <section className="w-full flex flex-col items-center my-30">
            <h2 className="font-georgia color-[#171717] font-bold text-3xl">Why Choose EezyHealth?</h2>
            <p className="w-4/5 text-center mt-4">Discover how our platform transforms healthcare experiences for both patients and providers</p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-15 w-[90%] mt-16">
                {datas.map((data, index)=> (
                    <div key={index} className="w-90 flex flex-col items-center gap-5">
                        <div className="bg-[#F0FBEE] text-primary-green w-8 h-8 rounded-md flex items-center justify-center">{data.icon}</div>
                        <h3 className="w-full text-center text-base">{data.title}</h3>
                        <p className="w-full text-center text-sm">{data.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}