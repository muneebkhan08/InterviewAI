//  "use server"
// import { chatSession } from '@/utils/GeminiAIModel'
// import { v4 as uuidv4 } from 'uuid';
// import { MockInterview } from '@/utils/schema'
// import moment from 'moment'
// import { db } from "@/utils/db";

// const onSubmit = async(e)=> {
   
//     setLoading(true);
//     e.preventDefault();
//     console.log(jobPosition, jobDesc, jobExperience);

//     const InputPrompt = "{{Job Position: " + jobPosition + "}, {Job Description/ Skills: " + jobDesc + "}, {Job Experience: " + jobExperience + " years}}, depending upon the above data of Job Position, Job Description/ Skills and Job Experience create " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions and answers in JSON format, Give questions and answers as field in JSON";

//     try {
//       const result = await chatSession.sendMessage(InputPrompt);
//       const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
//       const ress = await JSON.parse(MockJsonResp);
//       console.log(ress);
//       setJsonResponse(MockJsonResp);

//       if(MockJsonResp){
//         console.log(db); // Log the db object to check its structure
//         console.log("DB Object:", db); // Log the db object to check its structure
        
//         const resp = await db.insert(MockInterview)
//         .values({
//           mockId: uuidv4(),
//           jsonMockResp: MockJsonResp,
//           jobPosition: jobPosition,
//           jobDesc: jobDesc,
//           jobExperience: jobExperience,
//           createdBy: user?.primaryEmailAddress?.emailAddress,
//           createdAt: moment().format('DD_MM-yyyy')
//         }).returning({mockId: MockInterview.mockId})        
        
//         console.log("InsertedID = ", resp);
//       }
//       else{
//         console.log("Error");
//       }
//   } catch (error) {
//     console.error("Error in onSubmit:", error);
//   }

//     // if(MockJsonResp){
//     //   console.log(db); // Log the db object to check its structure
//     //   const resp = await db.insert(MockInterview)
//     //   .values({
//     //     mockId: uuidv4(),
//     //     jsonMockResp: MockJsonResp,
//     //     jobPosition: jobPosition,
//     //     jobDesc: jobDesc,
//     //     jobExperience: jobExperience,
//     //     createdBy: user?.primaryEmailAddress?.emailAddress,
//     //     createdAt: moment().format('DD_MM-yyyy')
//     //   }).returning({mockId: MockInterview.mockId})        
      
//     //   console.log("InsertedID = ", resp);
//     // }
//     // else{
//     //   console.log("Error");
//     // }

//     setLoading(false);
// }

// export default onSubmit
