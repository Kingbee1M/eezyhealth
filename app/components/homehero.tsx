import Image from "next/image";
import hero from '@/public/svg/homehero.svg'

export default function HomeHero() {
    return (
        <section className="w-full">
            <Image src={hero} alt="hero" width={100} height={100} className="w-full" />
        </section>
    )
}