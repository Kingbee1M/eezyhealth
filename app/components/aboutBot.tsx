import Image from "next/image"
import apple from '@/public/svg/ios.svg';
import google from '@/public/svg/android.svg';


export default function AboutBot() {
    return(
        <section className="w-full bg-white px-10 py-20">
            <div className="bg-primary-green w-full gap-6 lg:gap-0 px-7 py-16 rounded-lg flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-3/5 flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-white">Join the Future of Healthcare Management</h2>
                    <p className="text-lg lg:text-xl w-[90%] leading-5 text-white">Experience the difference that thoughtful design and powerful technology can make in healthcare delivery.</p>
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