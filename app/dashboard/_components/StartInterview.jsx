"use client"
import React, { useEffect, useState } from 'react'
import QuestionSection from './QuestionSection';
import RecordAnswerSection from './RecordAnswerSection';
import { Button } from '@/components/ui/button'
import Feedback from './Feedback';

const StartInterview = ({ questions, setUserAns, setFeed }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [allFeedback, setAllFeedback] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    SeeData();
  }, [show]);
  
  // Trigger counter for calling Perm() in the child
  const [permTrigger, setPermTrigger] = useState(0);
  useEffect(() => {
      GetInterviewDetails();
  }, []);
  const GetInterviewDetails = async () => {
      setMockInterviewQuestion(questions);
      setInterviewData(questions[3]);
      console.log(questions);
      console.log(mockInterviewQuestion);
      console.log(interviewData);
  };
  // When "See" is clicked, increment the trigger so that RecordAnswerSection knows to run Perm()
  const SeeData = () => {
    setPermTrigger(prev => prev + 1);
    setFeed(allFeedback);
    setUserAns(answer);
    console.log(answer);
    console.log(allFeedback);  
  };
  const handleClick = () => {
    SeeData()
    setClickCount((prev) => prev + 1);

    setTimeout(() => {
      if (clickCount + 1 === 2) {
        setShow(true);
      }
      setClickCount(0);
    }, 300);
  };

return (

  <div> 
    {!show &&
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Questions */}
          <QuestionSection 
              questions={questions}
              activeQuestionIndex={activeQuestionIndex} 
          />
          {/* Video/Audio recording */}
          <RecordAnswerSection 
              questions={questions}
              activeQuestionIndex={activeQuestionIndex}  
              setAnswer={setAnswer} 
              setAllFeedback={setAllFeedback}
              triggerPerm={permTrigger}
          />
      </div>
        
      <div className='flex justify-end gap-6 mt-7'>
          {activeQuestionIndex > 0 && 
            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
              {"<< "}Previous Question
            </Button>}
          {activeQuestionIndex !== questions?.length - 1 && 
            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
              Next Question{" >>"}
            </Button>}
          <div 
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {activeQuestionIndex==questions?.length-1 && <Button onClick={handleClick} >End Interview</Button>}
            {hovered && (
              <div className="absolute bottom-full mb-2 px-2 py-1 bg-red-200 text-red-700 text-sm rounded-md">
                Double Click Me
              </div>
            )}
          </div>
          
      </div>
    </div>}

    {show&&
    <div>
      <Feedback questions={questions} allFeedback={allFeedback} answer={answer}/> 
    </div>
    }

    
  </div>
);}

export default StartInterview
