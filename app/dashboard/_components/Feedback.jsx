"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import Link from 'next/link'
  

const Feedback = ({questions, allFeedback, answer}) => {
    
    const rat = allFeedback.map(item => JSON.parse(item)?.rating || 0).reduce((sum, rating) => sum + rating, 0) / allFeedback.length;

  return (
    <div className='p-10'>
        <h2 className='text-3xl font-bold text-green-500'>Congratulations</h2>
        <h2 className='text-2xl font-bold'>Here is your interview feedback</h2>
        <h2 className='text-primary text-lg my-3'>Your overall rating: <strong>{rat}/10</strong></h2>

        <h2 className='text-sm text-gray-500'>Find beloew interview questions with correct answer,  your answer and feedback for improvement</h2>

        <Collapsible className='mt-9'>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-7 w-full'>{questions[0].question}<ChevronsUpDown className='h-5 w-5' /></CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{JSON.parse(allFeedback[0])?.rating}</h2>
                <h2 className='text-sm bg-red-50 text-red-900 p-2 border rounded-lg'><strong>Your Answer: </strong>{answer.first}</h2>
                <h2 className='text-sm bg-green-50 text-green-900 p-2 border rounded-lg'><strong>Correct Answer: </strong>{questions[0].answer}</h2>
                <h2 className='text-sm bg-blue-50 text-primary p-2 border rounded-lg'><strong>Feedback: </strong>{JSON.parse(allFeedback[0])?.feedback}</h2>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className='mt-9'>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-7 w-full'>{questions[1].question}<ChevronsUpDown className='h-5 w-5' /></CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{JSON.parse(allFeedback[1])?.rating}</h2>
                <h2 className='text-sm bg-red-50 text-red-900 p-2 border rounded-lg'><strong>Your Answer: </strong>{answer.second}</h2>
                <h2 className='text-sm bg-green-50 text-green-900 p-2 border rounded-lg'><strong>Correct Answer: </strong>{questions[1].answer}</h2>
                <h2 className='text-sm bg-blue-50 text-primary p-2 border rounded-lg'><strong>Feedback: </strong>{JSON.parse(allFeedback[1])?.feedback}</h2>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className='mt-9'>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-7 w-full'>{questions[2].question}<ChevronsUpDown className='h-5 w-5' /></CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{JSON.parse(allFeedback[2])?.rating}</h2>
                <h2 className='text-sm bg-red-50 text-red-900 p-2 border rounded-lg'><strong>Your Answer: </strong>{answer.third}</h2>
                <h2 className='text-sm bg-green-50 text-green-900 p-2 border rounded-lg'><strong>Correct Answer: </strong>{questions[2].answer}</h2>
                <h2 className='text-sm bg-blue-50 text-primary p-2 border rounded-lg'><strong>Feedback: </strong>{JSON.parse(allFeedback[2])?.feedback}</h2>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className='mt-9'>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-7 w-full'>{questions[3].question}<ChevronsUpDown className='h-5 w-5' /></CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{JSON.parse(allFeedback[3])?.rating}</h2>
                <h2 className='text-sm bg-red-50 text-red-900 p-2 border rounded-lg'><strong>Your Answer: </strong>{answer.fourth}</h2>
                <h2 className='text-sm bg-green-50 text-green-900 p-2 border rounded-lg'><strong>Correct Answer: </strong>{questions[3].answer}</h2>
                <h2 className='text-sm bg-blue-50 text-primary p-2 border rounded-lg'><strong>Feedback: </strong>{JSON.parse(allFeedback[3])?.feedback}</h2>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className='mt-9'>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-7 w-full'>{questions[4].question}<ChevronsUpDown className='h-5 w-5' /></CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{JSON.parse(allFeedback[4])?.rating}</h2>
                <h2 className='text-sm bg-red-50 text-red-900 p-2 border rounded-lg'><strong>Your Answer: </strong>{answer.fifth}</h2>
                <h2 className='text-sm bg-green-50 text-green-900 p-2 border rounded-lg'><strong>Correct Answer: </strong>{questions[4].answer}</h2>
                <h2 className='text-sm bg-blue-50 text-primary p-2 border rounded-lg'><strong>Feedback: </strong>{JSON.parse(allFeedback[4])?.feedback}</h2>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Link href={'./'}><Button className="mt-12">Go Home</Button></Link>
  
    </div>
  )
}

export default Feedback