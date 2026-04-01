'use client';

import Image from "next/image";

import apple from '@/public/svg/apple.svg';
import google from '@/public/svg/googleplay.svg';
import fr1 from '@/public/svg/frame1.svg';
import fr2 from '@/public/svg/frame2.svg';
// import fr3 from '@/public/svg/frame3.svg';
import fr4 from '@/public/svg/frame4.svg';
import fr5 from '@/public/svg/frame5.svg';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeHero() {
  const frames = [fr1, fr2, fr4, fr5];
  const [index, setIndex] = useState(0);

  // Switch images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <section className="w-full relative h-125 lg:h-175 bg-white overflow-hidden">

      {/* 2. DYNAMIC SWIPING IMAGES */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          /* "100%" ensures it starts exactly off-screen to the right */
          initial={{ x: "100%" }} 
          animate={{ x: 0 }}
          /* "-100%" ensures it exits exactly off-screen to the left */
          exit={{ x: "-100%" }}
          transition={{ 
            duration: 1.2, // Slightly slower makes it feel more "premium"
            ease: [0.4, 0, 0.2, 1] // Smooth 'cubic-bezier' for a carousel feel
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={frames[index]} 
            alt={`Frame ${index + 1}`} 
            fill
            priority // Critical: prevents the 'white flash' by preloading
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 3. FIXED TEXT CONTENT (Always on top) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 max-w-lg lg:max-w-2xl">
        <h2 className="text-white text-3xl lg:text-6xl font-bold font-inter leading-tight">
          Access to quality healthcare anywhere
        </h2>
        <p className="text-white/90 text-lg lg:text-xl mt-4">
          Connect with top doctors from the comfort of your home.
        </p>

        <div className="flex gap-2 mt-5">
            <a href="https://apps.apple.com/us/app/facebook/id284882215" target="blank" className="bg-black text-white flex items-center p-2 gap-3">
                <Image src={apple} alt='apple' width={20} height={20} />
                <div>
                <p className="text-xs text-white">Download on the</p>
                <p className="text-sm text-white">App Store</p>
                </div>
            </a>
            <a href="https://play.google.com/store/search?q=easybuy&c=apps&hl=en" target="blank" className="bg-black text-white flex items-center p-2 gap-3">
                <Image src={google} alt='google' width={20} height={20} />
                <div>
                    <p className="text-xs text-white">Get it on</p>
                    <p className="text-sm text-white">Google play</p>
                </div>
            </a>
        </div>
      </div>
    </section>
  );
}