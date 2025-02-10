"use client"
import React, {useState} from 'react'
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import { MockInterview} from '@/utils/schema'
import moment from 'moment'
import { db } from "@/utils/db";
 
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

const New = () =>{
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const {user} = useUser();

    const onSubmit = async(e)=> {
        e.preventDefault();
        console.log(jobPosition, jobDesc, jobExperience);

        const InputPrompt = "{{Job Position: " + jobPosition + "}, {Job Description/ Skills: " + jobDesc + "}, {Job Experience: " + jobExperience + " years}}, depending upon the above data of Job Position, Job Description/ Skills and Job Experience create " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions and answers in JSON format, Give questions and answers as field in JSON";
        
        try {
          const result = await chatSession.sendMessage(InputPrompt);
          const textResponse = await result.response.text(); // ✅ Await the text response
          const MockJsonResp = textResponse.replace("```json", "").replace("```", "");
    
          if (MockJsonResp) {
            console.log(db); // ✅ Log db to check if it's properly initialized
    
            const resp = await db
              .insert(MockInterview)
              .values({
                mockId: uuidv4(),
                jsonMockResp: MockJsonResp,
                jobPosition,
                jobDesc,
                jobExperience,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format("DD_MM-yyyy"),
              })
              .returning({ mockId: MockInterview.mockId });
    
            console.log("InsertedID = ", resp);
          } else {
            console.error("Error: No Mock Interview JSON Response received.");
          }
        } catch (error) {
          console.error("Error in onSubmit:", error);
        }
        // const result = await chatSession.sendMessage(InputPrompt);
        // const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
        // console.log(JSON.parse(MockJsonResp));
        // setJsonResponse(MockJsonResp);

        // if(MockJsonResp){
        //   console.log(db); // Log the db object to check its structure
        //   const resp = await db.insert(MockInterview)
        //   .values({
        //     mockId: uuidv4(),
        //     jsonMockResp: MockJsonResp,
        //     jobPosition: jobPosition,
        //     jobDesc: jobDesc,
        //     jobExperience: jobExperience,
        //     createdBy: user?.primaryEmailAddress?.emailAddress,
        //     createdAt: moment().format('DD_MM-yyyy')
        //   }).returning({mockId: MockInterview.mockId});

        //   console.log("InsertedID = ", resp);
        // }
        // else{
        //   console.log("Error");
        // }
    };
        

  return (
    <div>
    <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
    onClick={() => setOpenDialog(true)}>
        <h2 className='font-bold text-gray-500 text-lg text-center'>+Add New</h2>
        </div>

        <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Tell us more about the job you are interviewing</DialogTitle>
            <DialogDescription>
              Please give some details about yourself. 
            </DialogDescription>
            
            <form onSubmit={onSubmit}>
              <div className='pt-6 text-sm pb-3'>
                <label>Job Role/ Job position</label>
                <Input className='mt-1' placeholder="Ex. Full Stack Developer" required
                onChange={(event)=>setJobPosition(event.target.value)}/>
              </div>
              <div className='text-sm pb-3'>
                <label>Job Description/ Skills/ Expertise</label>
                <Textarea className='mt-1' placeholder="Ex. React, node, mongo, typescript.. etc" required
                onChange={(event)=>setJobDesc(event.target.value)}/>
              </div>
              <div  className='text-sm pb-3'>
                <label><p>Years of experience</p></label>
                <Input type='number' className='mt-1' placeholder="Ex. 5" required
                onChange={(event)=>setJobExperience(event.target.value)}/>
              </div>

              

              <div className='flex gap-5 justify-end pt-6'>
                
                
                <div className="w-full flex items-center justify-center">
                    {/* Core Loader Modal */}
                    <Loader loadingStates={loadingStates} loading={loading} loop={false} duration={2000} />
                    {loading && (
                      <button
                        className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                        onClick={() => {
                          setLoading(false);
                          setOpenDialog(false);
                        }}
                      >
                        <IconSquareRoundedX className="h-10 w-10" />
                      </button>
                    )}
                </div>
                <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button onClick={()=>setLoading(true)} type="submit">Start Interview</Button>            
              </div>
            </form>
          
          </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>  
  )
}

export default New
