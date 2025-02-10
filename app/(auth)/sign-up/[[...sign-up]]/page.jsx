"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
    <WavyBackground backgroundFill={'#f8f8f8'}   className="max-w-4xl mx-auto pb-40">
          <div className="h-screen flex items-center justify-center"><SignUp /></div>
        </WavyBackground>
) 
}