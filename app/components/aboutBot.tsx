import Image from "next/image"
import apple from '@/public/svg/apple.svg';
import google from '@/public/svg/googleplay.svg';


export default function AboutBot() {
    return(
        <section className="w-full bg-primary-green px-5 py-20 mt-20">
            <div className="bg-white w-full gap-6 lg:gap-0 px-7 py-16 rounded-lg flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-3/5">
                    <h2 className="lg:text-3xl">Join the Future of Healthcare Management</h2>
                    <p className="text-lg lg:text-xl w-[90%] leading-5">Experience the difference that thoughtful design and powerful technology can make in healthcare delivery.</p>
                </div>

                 <div className="flex flex-row gap-2 w-full lg:w-1/3 items-center justify-baseline">
                    <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="bg-black text-white flex items-center p-2 gap-3 lg:flex-1">
                        <Image src={apple} alt='apple' width={20} height={20} className="w-2 lg:w-5" />
                        <div>
                        <p className="text-[6px] lg:text-xs text-white">Download on the</p>
                        <p className="text-[10px] lg:text-sm text-white">App Store</p>
                        </div>
                    </a>
                    <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="bg-black text-white flex items-center p-2 gap-3 lg:flex-1">
                        <Image src={google} alt='google' width={20} height={20} className="w-2 lg:w-5" />
                        <div>
                            <p className="text-[6px] lg:text-xs text-white">Get it on</p>
                            <p className="text-[10px] lg:text-sm text-white">Google play</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}