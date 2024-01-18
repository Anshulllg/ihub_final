import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const WebinarPage = () => {
  const { status, data } = useSession();
 const [name, setName] = useState("");
 const [title, settitle] = useState("");
 const [occupation, setoccupation] = useState("");
 const [date, setdate] = useState("");
 const [image, setImage] = useState(null);
 const [link, setLink] = useState("");
 const [webinars, setwebinars] = useState([]);
 const [editwebinar, setEditwebinar] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
 axios.get('https://ihub-hbkk.onrender.com/webinar')
   .then(response => setwebinars(response.data))
   .catch(error => console.error(error));

   
 }, [status]);

 useEffect(() => {
 if (editwebinar) {
   setEditwebinar({
     ...editwebinar,
     name: name,
     title: title,
     occupation: occupation,
     date: date,
     link: link
   });
 }
 }, [name, title, occupation, date, link]);

 const deletewebinar = (id) => {
 axios.delete(`https://ihub-hbkk.onrender.com/webinar/delete/${id}`)
   .then(() => setwebinars(prevwebinars => prevwebinars.filter(webinar => webinar._id !== id)))
   .catch(error => console.error(error));
 };

 const addwebinar = () => {
  convertBase64(image).then(base64Image => {
    axios.post("https://ihub-hbkk.onrender.com/webinar/add", {
   name: name,
   title: title,
   occupation: occupation,
   date: date,
   link: link,
   image:base64Image
 })
   .then(res => {
     console.log(res.data);
   })
   .catch(err => {
     console.error(err);
   });})
 
 };
 console.log(webinars)
 const updatewebinar = (id, updatedwebinar) => {
 axios.put(`http://localhost:4000/webinar/${id}`, updatedwebinar)
   .then(() => {
     setwebinars(prevwebinars => prevwebinars.map(webinar => webinar._id === id ? updatedwebinar : webinar));
     setEditwebinar(null);
     setIsModalOpen(false);
   })
   .catch(error => console.error(error));
 };

 const editwebinars = (webinar) => {
 setEditwebinar(webinar);
 setIsModalOpen(true);
 };
 const handleImageChange = (e) => {
  setImage(e.target.files[0]);
}

 return (
  <>
  {status === "authenticated" ? (
   <>
   <div className="p-4 my-12">
     <div className="space-y-2">
     <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setName(e.target.value)}
  name="name"
  value={name}
  placeholder="Name"
  rows={3} // Adjust the number of rows as needed
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => settitle(e.target.value)}
  name="title"
  value={title}
  placeholder="Title"
  rows={3}
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setoccupation(e.target.value)}
  name="occupation"
  value={occupation}
  placeholder="Occupation"
  rows={3}
></textarea>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="date"
  onChange={(e) => setdate(e.target.value)}
  name="date"
  value={date}
  placeholder="Date"
/>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="file"
  onChange={handleImageChange}
/>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLink(e.target.value)}
  name="link"
  value={link}
  placeholder="Link"
  rows={3}
></textarea>

       <div className="flex justify-between">
         <button className="bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addwebinar}>Add</button>
       </div>
     </div>
   </div>

   <div className="my-8 p-8 space-y-2">
     {webinars.map((webinar, index) => (
       <div className="grid grid-cols-5 gap-4 text-black" key={index}>
         <p>{webinar.name}</p>
         <p>{webinar.title}</p>
         {/* <p>{webinar.occupation}</p> */}
         <p>{webinar.date}</p>
         {/* <a href={webinar.link}>Link</a> */}
         <button className="bg-red-400 text-white p-1" onClick={() => deletewebinar(webinar._id)}>Delete</button>
         <button className="bg-blue-400 text-white p-1" onClick={() => editwebinars(webinar)}>Edit</button>
       </div>
     ))}
   </div>

   {isModalOpen && (
     <div className="modal">
       <div className="modal-content">
         <button onClick={() => setIsModalOpen(false)}>Close</button>
         <form onSubmit={(e) => {
           e.preventDefault();
           updatewebinar(editwebinar._id, { name: name, title: title, occupation: occupation, date: date, link: link });
         }}>
           <input type="text" value={editwebinar ? editwebinar.name : ''} onChange={(e) => setName(e.target.value)} />
           <input type="text" value={editwebinar ? editwebinar.title : ''} onChange={(e) => settitle(e.target.value)} />
           <input type="text" value={editwebinar ? editwebinar.occupation : ''} onChange={(e) => setoccupation(e.target.value)} />
           <input type="date" value={editwebinar ? editwebinar.date : ''} onChange={(e) => setdate(e.target.value)} />
           <input type="text" value={editwebinar ? editwebinar.link : ''} onChange={(e) => setLink(e.target.value)} />
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

export default WebinarPage;

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
