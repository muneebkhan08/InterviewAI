// pages/dashboard/interview.js
"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Interview() {
  const router = useRouter();
  const { data } = router.query;
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    if (data) {
      try {
        // Decode and parse the JSON string to retrieve the array
        const parsedArray = JSON.parse(decodeURIComponent(data));
        setArrayData(parsedArray);
      } catch (err) {
        console.error('Error parsing array data:', err);
      }
    }
  }, [data]);

  return (
    <div>
      <h1>Interview Page</h1>
      <ul>
        {arrayData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
