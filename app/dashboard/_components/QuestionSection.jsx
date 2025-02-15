"use Client"
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionSection = ({questions ,activeQuestionIndex}) => {

    const textToSpeech = (text)=>{
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Your browser does not support text-to-speech functionality.')
        }
    }

  return (
    <>
    <div className='p-5 border rounded-lg'>
        
            {questions.length > 0 && (
                <div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2'> 
                    {questions.map((question, index)=>(
                       <h2 key={index} className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'text-blue-500 font-extrabold'}`}>
                        Question #{index+1}
                       </h2>
                    ))}
                </div>
                
                <h2 className='mt-6 mb-5 text-md md:text-xl '>{questions[activeQuestionIndex].question}</h2>
                <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(questions[activeQuestionIndex].question)}/>
                </div>
            )}
            <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
                <h2 className='flex gap-2 items-center text-[#4845D2]'>
                    <Lightbulb />
                    <strong>Note:</strong>
                </h2>
                <h2 className='text-sm text-[#4845D2] my-2'>Click on record the answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each of the question and the answer to compare it</h2>
            </div>
    </div>
    </>
  )
}

export default QuestionSection