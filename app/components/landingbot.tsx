import Image from "next/image"
import apple from '@/public/svg/ios.svg';
import google from '@/public/svg/android.svg';

export default function LandingBot() {
    return (
        <section className="w-full lg:w-[90%] px-7 py-20 flex justify-around gap-5 bg-light-green mb-10">
            <div className="w-autos lg:w-auto">
                <h2 className="text-lg lg:text-2xl">Start Your Healthcare Journey Today</h2>
                <p className="">Join thousands of satisfied patients who trust HealthConnect</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-1/3 items-center">
            <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="block w-fit cursor-pointer">
                <Image src={apple} alt='apple' width={20} height={20} className="w-40 h-12.5"/>
            </a>
            <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="w-fit block cursor-pointer">
                <Image src={google} alt='google' width={20} height={20} className="w-40 h-12.5" />
            </a>
        </div>
        </section>
    )
}