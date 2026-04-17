import Image from "next/image"
import apple from '@/public/svg/ios.svg';
import google from '@/public/svg/android.svg';


export default function AboutBot() {
    return(
        <section className="w-full px-5 md:px-16 py-20 flex justify-around gap-5 bg-white">

            <div className="bg-primary-green flex flex-col gap-2 md:flex-row justify-between w-full rounded-lg p-4 md:p-16">
                <div className="w-auto lg:w-3/4 flex-col flex gap-2">
                    <h2 className="text-center text-base md:text-2xl text-white">Join the Future of Healthcare Management</h2>
                    <p   className="text-center  text-white text-sm md:text-base w-full md:w-4/5">Experience the difference that thoughtful design and powerful technology can make in healthcare delivery.</p>
                </div>

                 <div className="flex flex-row gap-2 w-full md:w-1/3 items-center">
                <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="block w-fit cursor-pointer">
                    <Image src={apple} alt='apple' width={100} height={100} className="w-30 md:w-80"/>
                </a>
                <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="w-fit block cursor-pointer">
                    <Image src={google} alt='apple' width={100} height={100} className="w-30 md:w-80"/>
                </a>
            </div>
            </div>
            
        </section>
    )
}