import { Icons } from "../UI/Icons";


export default function WhyChoose() {
    const datas = [
        {icon: 'calender2', title: "Book Appointments", description: "Find and book a qualified doctor in under 60 seconds. No phone calls. No waiting rooms.", id: '01' },
        {icon: 'video', title: "Video & Voice Consultations", description: "Crystal-clear video consultations from your couch. Works on any device, anywhere with signal.", id: '02' },
        {icon: 'clock', title: "24/7 Doctor Availability", description: "Health doesn't keep office hours. Our network of doctors is always on — nights, weekends, holidays.", id: '03' },
        {icon: 'check', title: "Flexible Scheduling", description: "Set your preferred hours, block time for emergencies, or get connected instantly for urgent care.", id: '04' },
        {icon: 'shield2', title: "Secure Consultations", description: "End-to-end encrypted consultations and records. Your health data belongs to you, always.", id: '05' },
        {icon: 'pc', title: "Clinic Management Tools", description: "For providers: one dashboard for records, schedules, billing and patient communication.", id: '06' },
    ]
    return (
        <section className="w-full flex flex-col items-center py-30 bg-[#0D0F0E] px-16">
            <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-[45%] flex flex-col">
                    <p className="text-primary-green font-bold ">WHAT WE OFFER</p>
                    <h2 className="font-georgia color-[#171717] font-bold text-3xl w-full text-white">Everything you need. Nothing you don&apos;t.</h2>
                </div>
            
                <p className="w-full md:w-[60%] md:max-w-125 md:mt-8 text-[#E9E9E9]">
                    We built eezyhealth around one idea: healthcare should feel like talking to someone who actually knows you — not filling out forms.
                </p>
            </div>
            
            

            <div className="grid grid-cols-1 md:grid-cols-[max-content_max-content_max-content] lg:grid-rows-2 justify-between gap-y-15 w-full max-w-360 items-center mt-16">
                {datas.map((data, index)=> (
                    <div key={index} className="max-w-50 w-full md:max-w-70 h-full flex flex-col gap-3 p-3 rounded-lg bg-[#191C1A] hover:bg-[#333935] cursor-pointer relative overflow-clip group">
                        <div className="w-0 h-48 border-l-5 border-l-primary-green absolute -top-60 left-0 group-hover:translate-y-60 duration-300 ease-in-out"/>
                        <div className="w-full flex justify-between">
                            <Icons name={data.icon} size="sm" />
                            <p className="text-[#646464] text-[40px] font-medium opacity-10">{data.id}</p>
                        </div>
                        <h3 className="w-full text-base text-white">{data.title}</h3>
                        <p className="w-full text-sm text-[#CFCDCD]">{data.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}