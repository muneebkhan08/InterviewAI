"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion";
import Link from "next/link";
import { Buttons } from "@/components/ui/moving-border";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";
import {ColourfulText} from "@/components/ui/colorful-text";
import {FaLinkedin} from 'react-icons/fa'
import Footer from "./dashboard/_components/Footer";

 
const loadingStates = [
  {
    text: "Hello there! 👋 ",
  },
  {
    text: "I’m Galaxy, your personal AI interview assistant!",
  },
  {
    text: "Hope you are doing well!",
  },
  {
    text: "I’m here to help you practice, prepare, and perfect your interview skills.",
  },
  {
    text: "Whether you're aiming for your first job, a career switch, or a big promotion,",
  },
  {
    text: "I’ve got you covered.",
  },
  {
    text: "What can I do for you? 🎯",
  },
  {
    text: "- Simulate real interview scenarios for any job or industry.",
  },
  {
    text: "- Ask you personalized questions based on your role and experience.",
  },
  {
    text: "- Provide instant feedback on your answers, communication style, and confidence.",
  },
  {
    text: "- Share tips and strategies to help you improve with every session.",
  },
  {
    text: "🚀",
  },
  {
    text: "I'm not just an interviewer; I’m your interview coach, motivator, and partner in success.",
  },
  {
    text: "Ready to ace your next interview?",
  },
  {
    text: "Let’s get started!",
  },
];

export default function Home() {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCLick=()=>{
    router.push('./dashboard');
  }
  
  return (
    <div className="bg-gray-100">

      <div className='flex p-4 items-center justify-between shadow-md pt-5 pb-5 md:mb-10'>
        <Link href={'./'}><Image className="cursor-pointer" src={'/logo.svg'} height={100} width={70} alt="Logo"/></Link>

        <h1 className="text-sm md:text-xl lg:text-xl  text-center text-black relative z-2 font-sans">
          Meet <ColourfulText text="Galaxy" /> your personalized AI assistant. <br /> 
        </h1>
        
        <Link href={'/dashboard'}><Button onClick={handleCLick}>Get Started</Button></Link>
      </div>

      <div className="container mx-auto sm:px-4 md:px-8 lg:px-20 py-4 w-full mt-30">
        <div className="my-8 justify-center mx-50">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="font-bold  text-primary md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              - A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>
          <p className="mx-3 mt-4 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p>
        </div>
  
        <div className="text-center pt-6 gap-5">  
        <Link href={'/dashboard'}><Button onClick={handleCLick} className="py-7 px-7 mr-6 rounded-3xl text-md">Start Interview</Button></Link>
          <Buttons 
            onClick={() => setLoading(true)}
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
          >
            Galaxy
          </Buttons>
        </div>
  
        
    
        <div className="flex w-full items-center justify-end py-8 md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-xl  md:text-2xl font-semibold text-gray-900 text-center my-2">
            250k+
            <span className="block text-sm text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-2xl font-semibold text-gray-900 text-center mr-10">
            1.2M+
            <span className="block text-sm text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>
  
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
            <Image src={'/hero.jpg'} className="w-full h-full object-cover" width={100} height={100} alt=""/>
            
  
            <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
              Inteviews Gemini&copy;
            </div>
  
            <div className=" md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
              <h2 className="text-gray-950 font-semibold">Intervew by "Galaxy"</h2>
              <p className="text-sm text-gray-700">
                Hello! I am Galaxy. I am your AI assistant for this interview application. I am here to help you with all sort of help and practice for the interviews.
              </p>
  
              <Button className="mt-3" onClick={() => setLoading(true)}>
                Generate <Sparkles />
              </Button>
            </div>
          </div>
      </div>

      <div className="py-12 my-5 lg:my-14">
        <Marquee direction="right">
          <Image className=" object-contain grayscale mx-12 xl:mx-16" src={'/logo.svg'} width={100} height={10} alt="Logo"/>
          <h2 className=" text-xl "><strong className=" text-2xl font-bold text-primary">Interview.AI</strong>- World's first Platform for Interview Practice</h2>
          <Image className=" object-contain grayscale mx-12 xl:mx-16" src={'/logo.svg'} width={100} height={10} alt="Logo"/>
        </Marquee>
        <Marquee direction="left" className="flex flex-cols items-center justify-between mt-16">
          <h2 className=" text-2xl md:text-4xl">Practice with <strong className="text-2xl font-bold md:text-4xl"><ColourfulText text="Galaxy" /></strong>- Ace every interview</h2>
        </Marquee>
      </div>

      <Footer />

      {loading &&
      <div className="w-full h-[60vh] flex items-center justify-center">
        {/* Core Loader Modal */}
        <Loader loadingStates={loadingStates} loading={loading} loop={false} duration={2000} />
        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>}
    </div>
  );
}
