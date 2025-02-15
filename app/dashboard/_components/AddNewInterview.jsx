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
import { LoaderCircle } from 'lucide-react'
import { Link } from 'next/link'
import { useRouter } from 'next/navigation'
//import {Interview} from "../interview/page";
// import { v4 as uuidv4 } from 'uuid';
// import { useUser } from '@clerk/nextjs'
// import { MockInterview } from '@/utils/schema'
// import moment from 'moment'
// import { db } from "@/utils/db";

const AddNewInterview = ({setQuestions, setInterview}) =>{
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();

  //const {user} = useUser();

  const onSubmit = async(e)=> {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt = "{{Job Position: " + jobPosition + "}, {Job Description/ Skills: " + jobDesc + "}, {Job Experience: " + jobExperience + " years}}, depending upon the above data of Job Position, Job Description/ Skills and Job Experience create " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions and answers in JSON format, Give questions and answers as field in JSON";

    //try {
      const result = await chatSession.sendMessage(InputPrompt);
      const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
      const ress = await JSON.parse(MockJsonResp);
      console.log(ress);
      console.log(ress[0].question);
      setQuestions(ress);
      setJsonResponse(MockJsonResp);
      console.log("DONE");
      //router.push(`/dashboard/interview?data=${encodeURIComponent(JSON.stringify(ress))}`);

  //     if(MockJsonResp){
  //       console.log(db); // Log the db object to check its structure
  //       console.log("DB Object:", db); // Log the db object to check its structure
        
  //       const resp = await db.insert(MockInterview)
  //       .values({
  //         mockId: uuidv4(),
  //         jsonMockResp: MockJsonResp,
  //         jobPosition: jobPosition,
  //         jobDesc: jobDesc,
  //         jobExperience: jobExperience,
  //         createdBy: user?.primaryEmailAddress?.emailAddress,
  //         createdAt: moment().format('DD_MM-yyyy')
  //       }).returning({mockId: MockInterview.mockId})        
        
  //       console.log("InsertedID = ", resp);
  //     }
  //     else{
  //       console.log("Error");
  //     }
  // } catch (error) {
  //   console.error("Error in onSubmit:", error);
  // }

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
    //   }).returning({mockId: MockInterview.mockId})        
      
    //   console.log("InsertedID = ", resp);
    // }
    // else{
    //   console.log("Error");
    // }

    if(ress){
      setOpenDialog(false);
      setInterview(true);
      // router.push('./dashboard/interview');
    }

    setLoading(false);
  }
return (
  <div>
    <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
    onClick={() => setOpenDialog(true)}>
        <h2 className='font-bold text-gray-500 text-lg text-center'>+ Start Interview</h2>
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
            <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading ? 
              <>
              <LoaderCircle className='animate-spin'/>Generating from AI
              </>:"Start Interview"
              }
              
            </Button>            
          </div>
        </form>
        
      </DialogHeader>
    </DialogContent>
    </Dialog>
  </div>
);
}


export default AddNewInterview
























// const AddNewInterview = () => {
//     const [openDialog, setOpenDialog] = useState(false);
//     const [jobPosition, setJobPosition] = useState('');
//     const [jobDesc, setJobDesc] = useState('');
//     const [jobExperience, setJobExperience] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [jsonResponse, setJsonResponse] = useState([]);
//     const [done, setDone] = useState(false);

//     const router = useRouter();

//     const onSubmit = async (e) => {
//         setLoading(true);
//         e.preventDefault();

//         const InputPrompt = `{{Job Position: ${jobPosition}}, {Job Description/ Skills: ${jobDesc}}, {Job Experience: ${jobExperience} years}}, depending upon the above data of Job Position, Job Description/ Skills and Job Experience create ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions and answers in JSON format.`;

//         const result = await chatSession.sendMessage(InputPrompt);
//         const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
//         const ress = await JSON.parse(MockJsonResp);
//         setJsonResponse(ress);

//         if (ress) {
//             setDone(true);
//         }

//         setLoading(false);
//     }
//     const encodedArray = encodeURIComponent(JSON.stringify(jsonResponse));

//     return (
//         <div>
//             <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
//                 onClick={() => setOpenDialog(true)}>
//                 <h2 className='font-bold text-gray-500 text-lg text-center'>+ Start an Interview</h2>
//             </div>
            

//             <Dialog open={openDialog}>
//                 <DialogContent className="max-w-2xl">
//                     <DialogHeader>
//                         <DialogTitle className="text-2xl">Tell us more about the job you are interviewing</DialogTitle>
//                         <DialogDescription>
//                             Please give some details about yourself.
//                         </DialogDescription>

//                         <form onSubmit={onSubmit}>
//                             <div className='pt-6 text-sm pb-3'>
//                                 <label>Job Role/ Job position</label>
//                                 <Input className='mt-1' placeholder="Ex. Full Stack Developer" required
//                                     onChange={(event) => setJobPosition(event.target.value)} />
//                             </div>
//                             <div className='text-sm pb-3'>
//                                 <label>Job Description/ Skills/ Expertise</label>
//                                 <Textarea className='mt-1' placeholder="Ex. React, node, mongo, typescript.. etc" required
//                                     onChange={(event) => setJobDesc(event.target.value)} />
//                             </div>
//                             <div className='text-sm pb-3'>
//                                 <label><p>Years of experience</p></label>
//                                 <Input type='number' className='mt-1' placeholder="Ex. 5" required
//                                     onChange={(event) => setJobExperience(event.target.value)} />
//                             </div>

//                             <div className='flex gap-5 justify-end pt-6'>
//                                 <Button variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
//                                 <Button type="submit" disabled={loading}>
//                                     {loading ? <LoaderCircle className='animate-spin' /> : "Start Interview"}
//                                     {done }
//                                 </Button>
//                             </div>
//                         </form>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// }

// export default AddNewInterview;
