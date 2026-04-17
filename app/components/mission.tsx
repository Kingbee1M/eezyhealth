
import { FaCircle } from "react-icons/fa";

export default function Mission () {
    const list = ['Global Accessibility', 'Ultimate Security', 'Simple & Fast', 'True Collaboration']
    return (
        <section className="bg-white w-full flex flex-col md:flex-row px-4 md:px-16 py-10 justify-between">
            <div className="w-full flex flex-col mb-5">
                <h2 className="font-normal text-sm text-primary-green mb-4 md:mb-2">Our Mission</h2>
                <h1 className="text-2xl leading-6 md:leading-11 font-normal w-2/3 md: xl:max-w-[40%]">Democratize access. Dignify care.</h1>
            </div>

            <div className="w-full md:w-full flex flex-col gap-7 text-xs justify-start md:text-sm">
                <p>We believe the quality of your healthcare should never depend on your zip code, your insurance tier, or your ability to navigate a broken system. eezyhealth exists to close that gap.</p>

                <p>Our platform connects patients to the right providers at the right time — securely, intuitively, and without the friction that costs lives. We&apos;re not building another health app. We&apos;re rebuilding the infrastructure of trust between people and their care.</p>

                <ul className="w-[95%] lg:w-full gap-y-4 gap-x-2 grid grid-cols-2 grid-rows-2 justify-between items-center mt-10 md:mt-0">
                    {list.map((item, index) => (
                        <li key={index} className="flex gap-1 lg:gap-1 px-5 py-2 border-[0.5px] items-center text-primary-green border-primary-green rounded-full text-xs md:text-xs"><FaCircle className="text-[6px]"/> {item}</li>
                    ))}
                </ul>
            </div>
            
        </section>
    )
}