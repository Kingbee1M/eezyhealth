'use client';

import apple from '@/public/svg/ios.svg';
import google from '@/public/svg/android.svg';
import Image from "next/image";
import fr2 from '@/public/svg/frame2.webp';
import fr3 from '@/public/svg/frame3.webp';
import fr4 from '@/public/svg/frame4.webp';
import fr5 from '@/public/svg/frame5.webp';
import fr1 from '@/public/svg/frame1.webp';
import { Icons } from "../UI/Icons";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeHero() {
  const frames = [fr1, fr2, fr3, fr4, fr5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <section className="w-full relative h-110 md:h-120 xl:h-175 bg-white overflow-hidden">

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          initial={{ x: "100%" }} 
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ 
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={frames[index]} 
            alt={`Frame ${index + 1}`} 
            fill
            priority 
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Texts */}
      <div className="absolute flex flex-col gap-1 md:gap-5 items-start left-17 top-1/2 -translate-y-1/2 z-10 max-w-lg lg:max-w-2xl">
        <p className="text-primary-green border-[0.5px] border-primary-green py-1 px-3 rounded-full text-xs md:text-[9px]">Trusted by 2M+ patients worldwide</p>
        <h2 className="text-white text-lg md:text-4xl font-bold font-inter leading-tight flex flex-col ">
          Your doctor,<span className="text-primary-green text-3xl md:text-4xl">wherever</span> you are.
        </h2>
        <p className="text-white/90 text-xs md:text-sm leading-6 md;leading-9 font-medium w-4/5 mt-4 md:mt-0">
          eezyhealth connects you to qualified doctors in seconds not days. Video consults, prescriptions, records and scheduling, all in one place.
        </p>

        <div className="flex item-start gap-0.5 md:gap-3 w-1/2">
            <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="block w-fit cursor-pointer">
                                <Image src={apple} alt='apple' width={20} height={20} className="w-17 md:w-80"/>
                            </a>
                            <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="w-fit block cursor-pointer">
                                <Image src={google} alt='apple' width={20} height={20} className="w-17 md:w-80"/>
                            </a>
        </div>
      </div>
    </section>
  );
}