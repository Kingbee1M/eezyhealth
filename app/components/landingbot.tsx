import Image from "next/image"
import apple from '@/public/svg/apple.svg';
import google from '@/public/svg/googleplay.svg';

export default function LandingBot() {
    return (
        <section className="w-full lg:w-4/5 px-7 py-7 flex justify-between bg-light-green mb-10">
            <div className="w-autos lg:w-auto">
                <h2 className="text-lg lg:text-2xl">Start Your Healthcare Journey Today</h2>
                <p className="">Join thousands of satisfied patients who trust HealthConnect</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-1/3 items-center">
            <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="bg-black text-white flex items-center p-2 gap-3 flex-1">
                <Image src={apple} alt='apple' width={20} height={20} className="w-2 lg:w-5" />
                <div>
                <p className="text-[6px] lg:text-xs text-white">Download on the</p>
                <p className="text-[10px] lg:text-sm text-white">App Store</p>
                </div>
            </a>
            <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="bg-black text-white flex items-center p-2 gap-3 flex-1">
                <Image src={google} alt='google' width={20} height={20} className="w-2 lg:w-5" />
                <div>
                    <p className="text-[6px] lg:text-xs text-white">Get it on</p>
                    <p className="text-[10px] lg:text-sm text-white">Google play</p>
                </div>
            </a>
        </div>
        </section>
    )
}