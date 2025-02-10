"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
 
const loadingStates = [
  {
    text: "Hello! I am Galaxy, your Interviewer..",
  },
  {
    text: "Hope you are doing well!",
  },
  {
    text: "Gathering your Data",
  },
  {
    text: "Hope you have prepared the interview",
  },
  {
    text: "Analyzing and preparing the interview for you",
  },
  {
    text: "Your interview is ready",
  },
  {
    text: "Now you can start your interview",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
    
    <div className="flex justify-end items-center p-4 gap-4 h-16"><UserButton /></div>
    <h1>Salam</h1>

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
    </div>
 
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <Button onClick={() => setLoading(true)}>Click to Load</Button>  

    </>
  );
}
