import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const CareerPage = () => {
  const { status, data } = useSession();
 const [name, setName] = useState("");
 const [location, setLocation] = useState("");
 const [description, setDescription] = useState("");
 const [deadline, setDeadline] = useState("");
 const [link, setLink] = useState("");
 const [aclink, setAcLink] = useState("");
 const [careers, setCareers] = useState([]);
 const [editCareer, setEditCareer] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
 axios.get('https://ihub-hbkk.onrender.com/career')
   .then(response => setCareers(response.data))
   .catch(error => console.error(error));

   
 }, [status]);

 useEffect(() => {
 if (editCareer) {
   setEditCareer({
     ...editCareer,
     name: name,
     location: location,
     description: description,
     deadline: deadline,
     link: link
   });
 }
 }, [name, location, description, deadline, link]);

 const deleteCareer = (id) => {
 axios.delete(`https://ihub-hbkk.onrender.com/career/delete/${id}`)
   .then(() => setCareers(prevCareers => prevCareers.filter(career => career._id !== id)))
   .catch(error => console.error(error));
 };

 const addCareer = () => {
  console.log(aclink)
  axios.post("https://ihub-hbkk.onrender.com/career/add", {
   name: name,
   location: location,
   description: description,
   deadline: deadline,
   link: link,
   Aclink: aclink
  })
   .then(res => {
     console.log(res.data);
   })
   .catch(err => {
     console.error(err);
   });
 };
 console.log(careers)
 const updateCareer = (id, updatedCareer) => {
  axios.put(`https://ihub-hbkk.onrender.com/career/${id}`, { ...updatedCareer, aclink: aclink })
   .then(() => {
     setCareers(prevCareers => prevCareers.map(career => career._id === id ? updatedCareer : career));
     setEditCareer(null);
     setIsModalOpen(false);
   })
   .catch(error => console.error(error));
 };

 const editCareers = (career) => {
 setEditCareer(career);
 setIsModalOpen(true);
 };

 return (
 <>
 {status === "authenticated" ? (<>
   <div className="p-8 my-12">
   <p className="text-bold  text-bold"> Edit Career information here</p>
     <div className="space-y-2 space-x-4">
     <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setName(e.target.value)}
  name="name"
  value={name}
  placeholder="Application Title"
  rows={3} // Adjust the number of rows as needed
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLocation(e.target.value)}
  name="location"
  value={location}
  placeholder="Location"
  rows={3}
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setDescription(e.target.value)}
  name="description"
  value={description}
  placeholder="Description link"
  rows={3}
></textarea>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="date"
  onChange={(e) => setDeadline(e.target.value)}
  name="deadline"
  value={deadline}
  placeholder="Deadline"
/>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setAcLink(e.target.value)}
  name="aclink"
  value={aclink}
  placeholder="Addendum link"
  rows={3}
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLink(e.target.value)}
  name="link"
  value={link}
  placeholder="Apply Link"
  rows={3}
></textarea>

       <div className="flex justify-between">
         <button className='bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white' onClick={addCareer}>Add</button>
       </div>
     </div>
   </div>

   <div className="my-8 p-8 space-y-2">
     {careers.map((career, index) => (
       <div className="grid grid-cols-5 gap-4 text-black" key={index}>
         <p>{career.name}</p>
         <p>{career.location}</p>
         {/* <p>{career.description}</p> */}
         <p>{career.deadline}</p>
         {/* <a href={career.link}>Link</a> */}
         <button className="bg-red-400 text-white p-1" onClick={() => deleteCareer(career._id)}>Delete</button>
         <button className="bg-blue-400 text-white p-1" onClick={() => editCareers(career)}>Edit</button>
       </div>
     ))}
   </div>

   {isModalOpen && (
     <div className="modal">
       <div className="modal-content">
         <button onClick={() => setIsModalOpen(false)}>Close</button>
         <form onSubmit={(e) => {
           e.preventDefault();
           updateCareer(editCareer._id, { name: name, location: location, description: description, deadline: deadline, link: link });
         }}>

         
           <input type="text" value={editCareer ? editCareer.name : ''} onChange={(e) => setName(e.target.value)} />
           <input type="text" value={editCareer ? editCareer.location : ''} onChange={(e) => setLocation(e.target.value)} />
           <input type="text" value={editCareer ? editCareer.description : ''} onChange={(e) => setDescription(e.target.value)} />
           <input type="date" value={editCareer ? editCareer.deadline : ''} onChange={(e) => setDeadline(e.target.value)} />
           <input type="text" value={editCareer ? editCareer.link : ''} onChange={(e) => setLink(e.target.value)} />
           <input type="text" value={editCareer ? editCareer.aclink : ''} onChange={(e) => setAcLink(e.target.value)} />
           <button type="submit">Update</button>
           
         </form>
       </div>
     </div>
   )}
 </>) : (
    <div className="text-center">
    <h1 className="text-3xl font-bold">Loading...</h1>
  </div>
   )}
 
 </>
 );
};

export default CareerPage;
