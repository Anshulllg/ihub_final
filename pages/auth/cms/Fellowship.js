import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from "next-auth/react";
import Router from "next/router";
const FellowPage = () => {
  const { status, data } = useSession();
  const [name, setName] = useState("");
 const [duration, setDuration] = useState("");
 const [type, setType] = useState("");
 const [eligibility, setEligibility] = useState("");
 const [guidelines, setGuidelines] = useState("");
 const [objective, setObjective] = useState("");
 const [link, setLink] = useState("");
 const [fellows, setFellows] = useState([]);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
 axios.get('https://ihub-hbkk.onrender.com/fell')
   .then(response => setFellows(response.data))
   .catch(error => console.error(error));
 }, [status]);

 const addFellow = () => {
  axios.post("https://ihub-hbkk.onrender.com/fell/add", {
   name: name,
   duration: duration,
   type: type,
   eligibility: eligibility,
   guidelines: guidelines,
   objective: objective,
   link: link
  })
  .then(res => {
   console.log(res.data);
  })
  .catch(err => {
   console.error(err);
  });
  };
console.log(fellows)
 const deleteFellow = (id) => {
 axios.delete(`https://ihub-hbkk.onrender.com/fell/delete/${id}`)
 .then(res => {
   if (res.status === 200) {
     setFellows(prevFellows => prevFellows.filter(fellow => fellow._id !== id))
   } else {
     console.error('Error deleting fellow');
   }
 })
 .catch(error => console.error(error));
 };

 const updateFellow = (id, updatedFellow) => {
 axios.put(`https://ihub-hbkk.onrender.com/fell/${id}`, updatedFellow)
 .then(() => {
   setFellows(prevFellows => prevFellows.map(fellow => fellow._id === id ? updatedFellow : fellow));
 })
 .catch(error => console.error(error));
 };

 return (<>
 {status === "authenticated" ? (
  <div className='my-20 space-x-2 space-y-2'>
 <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setName(e.target.value)}
  name="name"
  value={name}
  placeholder="Name"
  rows="3"  // Adjust the number of rows to make it bigger
  cols="40" // Adjust the number of columns to make it wider
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setDuration(e.target.value)}
  name="duration"
  value={duration}
  placeholder="Duration"
  rows="3"
  cols="40"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setType(e.target.value)}
  name="type"
  value={type}
  placeholder="Type"
  rows="3"
  cols="40"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setEligibility(e.target.value)}
  name="eligibility"
  value={eligibility}
  placeholder="Eligibility"
  rows="5" // Making this one a bit taller
  cols="40"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setGuidelines(e.target.value)}
  name="guidelines"
  value={guidelines}
  placeholder="Guideline link"
  rows="5"
  cols="40"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setObjective(e.target.value)}
  name="objective"
  value={objective}
  placeholder="Objective"
  rows="5"
  cols="40"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLink(e.target.value)}
  name="link"
  value={link}
  placeholder="Link"
  rows="3"
  cols="40"
></textarea>

    {/* <button onClick={addFellow}>Add</button> */}
     <button className="bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addFellow}>Add</button>
     {fellows.map((fellow, index) => (
       <div  className=' grid grid-cols-5 gap-4 text-black' key={index}>
         <p>{fellow.name}</p>
         {/* <p>{fellow.duration}</p>
         <p>{fellow.grant}</p>
         <p>{fellow.eligibility}</p> */}
         <button  className="bg-red-400 text-white p-1" onClick={() => deleteFellow(fellow._id)}>Delete</button>
         <button  className="bg-blue-400 text-white p-1" onClick={() => updateFellow(fellow._id, { name: name, duration: duration, grant: grant, eligibility: eligibility })}>Update</button>
       </div>
     ))}
   </div>
 ) : (<div className="text-center">
 <h1 className="text-3xl font-bold">Loading...</h1>
</div>) }

 </>
 );
};

export default FellowPage;
