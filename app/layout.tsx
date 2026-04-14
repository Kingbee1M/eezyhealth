import type { Metadata } from "next";
import { Geist, Noto_Sans_Georgian, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./UI/nav";
import FooterSection from "./UI/footer";
import { cn } from "@/lib/utils";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});


const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-dmSans',
});

const georgian = Noto_Sans_Georgian({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-georgian',
});

export const metadata: Metadata = {
  title: "eezyhealth",
  description: "An all-in-one healthcare management system designed to streamline operations, enhance patient care, and empower healthcare professionals with innovative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${dmSans.variable} ${georgian.variable} antialiased w-screen h-screen overflow-x-clip`}
      >
        <Navbar/>
        <main className="w-full mt-12 flex flex-col items-center justify-center grow">
          {children}
        </main>
        
        <FooterSection/>
      </body>
    </html>
  );
}
