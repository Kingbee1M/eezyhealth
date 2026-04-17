import Counter from "../UI/counter"
import { PiLessThanBold } from "react-icons/pi";


export default function NumberStrip () {
    const numbers = [
        { icon: null ,first: 2, second: null, suffix: 'M+', desc: "Patients connected"},
        { icon: null ,first: 9, second: 8, suffix: '%', desc: "Satisfaction rate"},
        { icon: <PiLessThanBold/> ,first: 3, second: null, suffix: 'min', desc: "Average wait time"},
        { icon: null ,first: 4, second: null, suffix: ',000+', desc: "Contact center seats deployed globally"},
    ]
    return(
        <section aria-details="our statistics" className="grid grid-cols-4 w-full bg-white">
            {numbers.map((num)=> (
                <div key={num.desc} className="border-x-[0.1px] border-primary-green flex flex-col items-center py-12 ">
                    <div className="flex">
                        <Counter 
                        first={num.first} 
                        second={num.second} 
                        icon={num.icon} 
                        suffix={num.suffix} 
                        />
                    </div>
                    
                    <p className="w-full text-center text-[10px]">{num.desc}</p>
                </div>
            ))}
        </section>
    )
}