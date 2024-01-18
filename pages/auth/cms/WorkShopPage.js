import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const WorkShopPage = () => {
  const { status, data } = useSession();
 const [title, setTitle] = useState("");
 const [link, setLink] = useState("");
 const [events, setEvents] = useState([]);
 const [date, setDate] = useState("");
const [image, setImage] = useState(null);

 const [editEvent, setEditEvent] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
 axios.get('https://ihub-hbkk.onrender.com/workshop')
 .then(response => setEvents(response.data))
 .catch(error => console.error(error));
 }, [status]);

 useEffect(() => {
 if (editEvent) {
 setEditEvent({
  ...editEvent,
  title: title,
  link: link
 });
 }
 }, [title, link]);

 const deleteEvent = (id) => {
    axios.delete(`https://ihub-hbkk.onrender.com/workshop/delete/${id}`)
    .then(res => {
     if (res.status === 200) {
       setEvents(prevEvents => prevEvents.filter(event => event._id !== id))
     } else {
       console.error('Error deleting event');
     }
    })
    .catch(error => console.error(error));
   };
   

   const addEvent = () => {
    convertBase64(image).then(base64Image => {
      axios.post("https://ihub-hbkk.onrender.com/workshop/add", {
        title: title,
        link: link,
        date: date,
        image: base64Image
        })
        .then(res => {
        console.log(res.data);
        })
        .catch(err => {
        console.error(err);
        });
    })
    
   };

 const updateEvent = (id, updatedEvent) => {
 axios.put(`https://ihub-hbkk.onrender.com/workshop/${id}`, updatedEvent)
 .then(() => {
  setEvents(prevEvents => prevEvents.map(event => event._id === id ? updatedEvent : event));
  setEditEvent(null);
  setIsModalOpen(false);
 })
 .catch(error => console.error(error));
 };

 const editEvents = (event) => {
 setEditEvent(event);
 setIsModalOpen(true);
 };

 return (
  <>
  {status === "authenticated" ? (
     <>
     <div className="p-4 my-12">
       <div className="space-y-2 space-x-2">
       <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setTitle(e.target.value)}
  name="name"
  value={title}
  placeholder="Name"
  rows={3} // Adjust the number of rows as needed
></textarea>

<textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setLink(e.target.value)}
  name="link"
  value={link}
  placeholder="Link"
  rows={3}
></textarea>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="date"
  onChange={(e) => setDate(e.target.value)}
  name="date"
  value={date}
  placeholder="Date"
/>

<input
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  type="file"
  onChange={(e) => setImage(e.target.files[0])}
/>

         <div className="flex justify-between">
           <button className=" bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addEvent}>Add</button>
         </div>
       </div>
     </div>
   
     <div className="my-8 p-8">
       {events.map((event, index) => (
         <div className="grid grid-cols-5 gap-4 text-black" key={index}>
           <p>{event.title}</p>
           <a href={event.link}>Link</a>
           <button className="bg-red-400 text-white p-1" onClick={() => deleteEvent(event._id)}>Delete</button>
           <button className="bg-blue-400 text-white p-1" onClick={() => editEvents(event)}>Edit</button>
         </div>
       ))}
     </div>
   
     {isModalOpen && (
       <div className="modal">
         <div className="modal-content">
           <button onClick={() => setIsModalOpen(false)}>Close</button>
           <form onSubmit={(e) => {
             e.preventDefault();
             updateEvent(editEvent._id, { name: name, link: link });
           }}>
             <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="text" value={editEvent ? editEvent.name : ''} onChange={(e) => setName(e.target.value)} />
             <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="text" value={editEvent ? editEvent.link : ''} onChange={(e) => setLink(e.target.value)} />
             <button className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="submit">Update</button>
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

export default WorkShopPage;

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
