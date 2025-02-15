// import React from 'react'
// import AddNewInterview from './_components/AddNewInterview'

// const Dashboard = () => {
//   return (
//     <div className='p-10'>  
//       <h2 className='text-2xl font-bold'>Dashboard</h2>
//       <h2 className='text-gray-500'>Create and Start AI Interview</h2>
//       <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
//         <AddNewInterview />
//       </div>

// {questions.length > 0 && (
//   <div className="mt-5">
//     <h1 className="text-2xl font-bold">Interview Questions</h1>
//     <ul className="bg-gray-200 p-3 rounded-lg">
//       {questions.map((item, index) => (
//         <li key={index} className="mb-3">
//           <strong>Q{index + 1}: {item.question}</strong>
//           <p>A: {item.answer}</p>
//         </li>
//       ))}
//     </ul>
//   </div>
// )}
//     </div>
//   )
// }

// export default Dashboard

"use client"
import React,{useState} from 'react'
import AddNewInterview from './_components/AddNewInterview'
import StartInterview from './_components/StartInterview';

const Dashboard = () => {
  const [questions, setQuestion] = useState([]);
  const [interview, setInterview] = useState(false);
  const [userAns, setUserAns] = useState([]);
  const [feed, setFeed] = useState([]);
  
  return (
    <div className='p-10'>  
      {!interview &&(<div>
      <h2 className='text-2xl font-bold'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start AI Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview setQuestions={setQuestion} setInterview={setInterview} />
      </div>
      </div>

       )}
      
      {/* {interview ? <StartInterview questions={questions} /> : ""} */} 
      {questions.length > 0 && <StartInterview questions={questions} setUserAns={setUserAns} setFeed={setFeed}/>}

    </div>
  )
}

export default Dashboard