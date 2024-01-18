import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const RGrantsPage = () => {
  const { status, data } = useSession();
  const [title, setTitle] = useState("");
 const [image, setImage] = useState("");
 const [name, setName] = useState("");
 const [link, setLink] = useState("");
 const [occupation, setOccupation] = useState("");
 const [field, setField] = useState("");
 const [rgrants, setRGrants] = useState([]);
 const [editRGrant, setEditRGrant] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
   axios.get('https://ihub-hbkk.onrender.com/rgrants')
     .then(response => setRGrants(response.data))
     .catch(error => console.error(error));
 }, [status]);

 useEffect(() => {
   if (editRGrant) {
     setEditRGrant({
       ...editRGrant,
       title: title,
       image: image,
       name: name,
       link: link,
       occupation: occupation,
       field: field
     });
   }
 }, [title, image, name, link, occupation, field]);

 const deleteRGrant = (id) => {
   axios.delete(`https://ihub-hbkk.onrender.com/rgrants/delete/${id}`)
     .then(() => setRGrants(prevRGrants => prevRGrants.filter(rgrant => rgrant._id !== id)))
     .catch(error => console.error(error));
 };

 const addRGrant = () => {
   convertBase64(image).then(base64Image => {
     axios.post("https://ihub-hbkk.onrender.com/rgrants/add", {
       title: title,
       image: base64Image,
       name: name,
       link: link,
       occupation: occupation,
       field: field
     })
       .then(res => {
         console.log(res.data);
       })
       .catch(err => {
         console.error(err);
       });
   });
 };

 const updateRGrant = (id, updatedRGrant) => {
   axios.put(`https://ihub-hbkk.onrender.com/rgrants/${id}`, updatedRGrant)
     .then(() => {
       setRGrants(prevRGrants => prevRGrants.map(rgrant => rgrant._id === id ? updatedRGrant : rgrant));
       setEditRGrant(null);
       setIsModalOpen(false);
     })
     .catch(error => console.error(error));
 };

 const editRGrants = (rgrant) => {
   setEditRGrant(rgrant);
   setIsModalOpen(true);
 };

 const handleImageChange = (e) => {
   setImage(e.target.files[0]);
 }

 return (
  <>
  {status === "authenticated" ? ( 
  <>
  <div className="p-20 my-12">
 <div className="space-y-2 space-x-2">
 <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setTitle(e.target.value)}
  name="title"
  value={title}
  placeholder="Title"
></textarea>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="file"
  onChange={handleImageChange}
/>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setName(e.target.value)}
  name="name"
  value={name}
  placeholder="Name"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLink(e.target.value)}
  name="link"
  value={link}
  placeholder="Link"
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setOccupation(e.target.value)}
  name="occupation"
  value={occupation}
  placeholder="Occupation"
></textarea>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="text"
  value={field}
  onChange={(e) => setField(e.target.value)}
  placeholder="Field"
/>

   <div className="flex justify-between">
     <button className=" bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addRGrant}>Add</button>
   </div>
 </div>
</div>

<div className="my-8 p-8">
 {rgrants.map((rgrant, index) => (
   <div className="flex justify-between text-black" key={index}>
     <p>{rgrant.name}</p>
     <p>{rgrant.title}</p>
     <p>{rgrant.link}</p>
     <img src={rgrant.image} alt={rgrant.name} className="w-20 h-20" />
     <button className="bg-red-400 text-white p-1" onClick={() => deleteRGrant(rgrant._id)}>Delete</button>
     <button className="bg-blue-400 text-white p-1" onClick={() => editRGrants(rgrant)}>Edit</button>
   </div>
 ))}
</div>

{isModalOpen && (
<div className="modal border-2 border-black-400 p-4 mx-auto my-auto">
<div className="modal-content">
<button onClick={() => setIsModalOpen(false)}>Close</button>
<form onSubmit={(e) => {
  e.preventDefault();
  updateRGrant(editRGrant._id, { title: title, image: image, name: name, link: link, occupation: occupation });
}}>
  <input type="text" value={editRGrant ? editRGrant.title : ''} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
  <input type="text" value={editRGrant ? editRGrant.name : ''} onChange={(e) => setName(e.target.value)} placeholder="Name" />
  <input type="text" value={editRGrant ? editRGrant.link : ''} onChange={(e) => setLink(e.target.value)} placeholder="Link" />
  <input type="text" value={editRGrant ? editRGrant.occupation : ''} onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation" />
  <button type="submit">Update</button>
</form>
</div>
</div>
)}
</>
) : (<div className="text-center">
 <h1 className="text-3xl font-bold">Loading...</h1>
</div>)}
   
    </>
   );
};

export default RGrantsPage;

function convertBase64(file) {
 return new Promise((res, rej) => {
   const fileReader = new FileReader();
   fileReader.readAsDataURL(file);
   fileReader.onload = () => {
     res(fileReader.result)
   };
   fileReader.onerror = (error) => {
     rej(error)
   }
 })
}
