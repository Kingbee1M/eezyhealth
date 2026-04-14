import Image from "next/image"
import apple from '@/public/svg/ios.svg';
import google from '@/public/svg/android.svg';

export default function LandingBot() {
    return (
        <section className="w-full px-16 py-20 flex justify-around gap-5 bg-white">

            <div className="bg-primary-green flex justify-between w-full rounded-lg p-16">
                <div className="w-autos lg:w-auto">
                <h2 className="text-lg lg:text-2xl text-white">Start Your Healthcare Journey Today</h2>
                <p className=" text-white w-4/5">Join millions of patients who access quality care on their terms. Free to download.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-1/3 items-center">
                <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="block w-fit cursor-pointer">
                    <Image src={apple} alt='apple' width={20} height={20} className="w-40 h-12.5"/>
                </a>
                <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="w-fit block cursor-pointer">
                    <Image src={google} alt='google' width={20} height={20} className="w-40 h-12.5" />
                </a>
            </div>
            </div>
            
        </section>
    )
}