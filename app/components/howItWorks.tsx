import phone from '@/public/svg/phone.svg'
import Image from "next/image";



export default function HowItWorks() {
    const steps = [
        {id: 1, icon: 'download', title: 'Download & Sign Up', desc: "Create your secure account in under two minutes. We'll never sell your data or spam your inbox."},
        {id: 2, icon: 'people', title: 'Create Your Profile', desc: "Add your medical history, allergies, and preferences. The more we know, the better your care."},
        {id: 3, icon: 'calender', title: 'Book an Appointment', desc: 'Choose your doctor, pick a time, or tap "See me now" for immediate urgent care access.'},
        {id: 4, icon: 'doctoricon', title: 'Talk to a Doctor', desc: 'Video or voice consultation, digital prescriptions, and follow-up care — all in the app.'},
    ]
    return (
        <section id="works" className="w-full flex flex-col lg:px-16 lg:flex-row justify-between items-center relative bg-white py-8 overflow-hidden">
            <div className="w-0 h-0 border-t-310 border-t-[#b0c7ab] opacity-20 border-r-1550 border-r-transparent top-0 -left-30 absolute" />
            <div className="w-[90%] flex flex-col gap-10 lg:gap-4 items-center lg:items-start z-20">
                <h3 className='text-primary-green text-sm'>How It Works</h3>
                <h2 className="text-3xl w-[90%] md:w-2/3 text-center md:text-left font-normal leading-10">Quality care in four simple steps.</h2>
                <div className="w-full full grid grid-cols-1 justify-center lg:justify-start items-center gap-x-12 gap-y-8 mt-8">
                    {steps.map((step, index)=> {
                        const first = index === 0;
                        return (
                            <div key={index} className='flex flex-col w-fit'>
                                <div className="flex items-start w-[86%] max-w-150 gap-3">
                                    <p className={`w-10 h-10 flex items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-full ${first && 'bg-primary-green text-white'}`}>{step.id}</p>
                                    <div className='flex flex-col gap-4 w-[55%]'>
                                        <h3 className="text-xl leading-7">{step.title}</h3>
                                        <p className="text-base leading-6">{step.desc}</p>
                                    </div>
                                </div>
                                
                                    <hr className="w-full border border-gray-100 mt-8"/>
                                </div>
                    )})}
                </div>
                
            </div>

            <Image src={phone} alt="phone" width={300} height={300} className="w-160 md:w-100 z-20"/>
        </section>
    )
}