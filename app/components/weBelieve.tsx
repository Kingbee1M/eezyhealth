

import { Icons } from "../UI/Icons";

export default function WeBelieve() {
    const datas = [
        {title: 'Accessibility', desc: 'Quality healthcare should be available to everyone, regardless of location or economic status.', icon: 'val1', id: '01'},
        {title: 'Security', desc: 'Patient data deserves the highest level of protection with enterprise-grade encryption and compliance.', icon: 'val2', id: '02'},
        {title: 'Simplicity', desc: 'Healthcare technology should enhance care, not complicate it with intuitive, user-friendly design.', icon: 'val3', id: '03'},
        {title: 'Collaboration', desc: 'Better health outcomes happen when patients, doctors, and staff work together seamlessly.', icon: 'val4', id: '04'},
    ]
    return (
        <section className="flex items-center lg:items-start flex-col pt-20 gap-8 pb-12 px-16 bg-[#0D0F0E] w-full">
            <h2 className="text-primary-green font-bold text-sm">What We Believe</h2>
            <p className="w-full lg:w-1/2 text-center lg:text-left text-white">Values that shape every decision we make.</p>

           
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-5">
                    { datas.map((data, index) => (
                        <div key={index} className="w-full max-w-300 h-full flex flex-col gap-3 p-3 rounded-lg bg-[#191C1A] hover:bg-[#333935] cursor-pointer relative overflow-clip group">
                        <div className="w-0 h-48 border-l-5 border-l-primary-green absolute -top-60 left-0 group-hover:translate-y-60 duration-300 ease-in-out"/>
                        <div className="w-full flex justify-between">
                            <Icons name={data.icon} size="xxs" />
                            <p className="text-[#646464] text-[40px] font-medium">{data.id}</p>
                        </div>
                        <h3 className="w-full text-base text-white">{data.title}</h3>
                        <p className="w-full text-sm text-[#CFCDCD]">{data.desc}</p>
                    </div>
                    )) }
                </div>
        </section>
    )
}