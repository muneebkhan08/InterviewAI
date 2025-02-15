import React, { useState, useEffect } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import { chatSession } from '@/utils/GeminiAIModel';

const RecordAnswerSection = ({ questions, activeQuestionIndex, setAnswer, setAllFeedback, triggerPerm }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]); 
    const [userAnswers, setUserAnswers] = useState({first:"", second:"", third:"", fourth:"", fifth:""});
    const { toast } = useToast()

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.map((result) => {
            setUserAnswer(prevAns => prevAns + result?.transcript);
        })
    }, [results]);

    useEffect(() => {
        if (!isRecording && userAnswer.length > 10) {
            UpdateUserAnswer();
        }
    }, [userAnswer]);

    const StartStopRecording = async () => {
        if (isRecording) {
            setIsLoading(true);
            stopSpeechToText();
            console.log(userAnswer);            
        }
        else {
            startSpeechToText();
        }
    };

    const UpdateUserAnswer = async () => {
        console.log(userAnswer);
        setIsLoading(true);
        const feedbackPrompt = "Question:{" + questions[activeQuestionIndex].question + "}, User Answer:{" + userAnswer + "}, Depends on the question and user answer for given interview question please give us rating and feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with rating field and feedback field, also add index that is equal to {" + activeQuestionIndex + "} in the json format as well";
        const result = await chatSession.sendMessage(feedbackPrompt);
        const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
        
        console.log(mockJsonResp);

        setFeedbacks(prevFeedbacks => {
            const newFeedbacks = [...prevFeedbacks];
            newFeedbacks[activeQuestionIndex] = mockJsonResp;
            return newFeedbacks;
        });

        if (mockJsonResp) {
            toast({
                title: "User Answer recorded successfully.",
                description: "Now Attempt the remaining questions if left",
            });
            setResults([]);
        }
        setResults([]);

        if (activeQuestionIndex === 0) {
            setUserAnswers(prev => ({...prev, first: `${userAnswer}`}));
        }
        if (activeQuestionIndex === 1) {
            setUserAnswers(prev => ({...prev, second: `${userAnswer}`}));
        }
        if (activeQuestionIndex === 2) {
            setUserAnswers(prev => ({...prev, third: `${userAnswer}`}));
        }
        if (activeQuestionIndex === 3) {
            setUserAnswers(prev => ({...prev, fourth: `${userAnswer}`}));
        }
        if (activeQuestionIndex === 4) {
            setUserAnswers(prev => ({...prev, fifth: `${userAnswer}`}));
        }

        setUserAnswer('');
        setIsLoading(false);
    };

    const SeeUser = () => {
        console.log(userAnswers.fifth);
        console.log(JSON.parse(feedbacks[4])?.rating);
    };

    // The Perm function sets the parent's states with the current user answers and feedbacks
    const Perm = () => {
        setAnswer(userAnswers);
        setAllFeedback(feedbacks);
    };

    // Use an effect that listens for changes in the triggerPerm prop
    useEffect(() => {
        // If triggerPerm is updated (non-zero), then call Perm()
        if (triggerPerm > 0) {
            Perm();
        }
    }, [triggerPerm]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center items-center bg-secondary rounded-lg p-5 mt-20'>
                <Webcam
                    mirrored={true}
                    style={{
                        height:300,
                        width:'100%',
                        zIndex:10,
                    }}/>  
            </div>

            <div className='mt-8'>
                <Button disabled={isLoading} variant="outline" onClick={StartStopRecording}>
                    {isRecording 
                        ? <div className='text-red-500 animate-pulse flex gap-2 items-center'> <StopCircle /> Stop Recording </div>  
                        : <div className='flex gap-2 text-primary items-center'> <Mic/>Start Recording</div>
                    }
                </Button>
            </div>
        </div>
    )
}

export default RecordAnswerSection;
