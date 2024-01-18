import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const MediaEventPage = () => {
  const { status, data } = useSession();
 const [name, setName] = useState("");
 const [image1, setImage1] = useState(null);
 const [image2, setImage2] = useState(null);
 const [image3, setImage3] = useState(null);
 const [image4, setImage4] = useState(null);

 const [events, setEvents] = useState([]);
 const [editEvent, setEditEvent] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
 axios.get('https://ihub-hbkk.onrender.com/mev')
 .then(response => setEvents(response.data))
 .catch(error => console.error(error));
 }, [status]);

 useEffect(() => {
 if (editEvent) {
 setEditEvent({
  ...editEvent,
  name: name,
 });
 }
 }, [name]);
 console.log(events)

 const deleteEvent = (id) => {
    axios.delete(`https://ihub-hbkk.onrender.com/mev/delete/${id}`)
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
    convertBase64(image1, image2, image3, image4).then(base64Images => {
      axios.post("https://ihub-hbkk.onrender.com/mev/add", {
        name: name,
        image1: base64Images[0],
        image2: base64Images[1],
        image3: base64Images[2],
        image4: base64Images[3],
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err.response.data);
      });
    });
   };
   
 const handleImageChange1 = (e) => {
  setImage1(e.target.files[0]);
}
const handleImageChange2 = (e) => {
  setImage2(e.target.files[0]);
}
const handleImageChange3 = (e) => {
  setImage3(e.target.files[0]);
}
const handleImageChange4= (e) => {
  setImage4(e.target.files[0]);
}


 const updateEvent = (id, updatedEvent) => {
 axios.put(`https://ihub-hbkk.onrender.com/mev/${id}`, updatedEvent)
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

 return (<>
  {status === "authenticated" ? ( <>
    <div className="p-4 my-12">
      <div className="space-y-2 flex gap-1">
      <textarea
                className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 '
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                placeholder="Heading"
                rows={3}
              ></textarea>
        <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="file" onChange={handleImageChange1} />
        <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="file" onChange={handleImageChange2} />
        <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="file" onChange={handleImageChange3} />
        <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' type="file" onChange={handleImageChange4} />
        <div className="flex justify-between">
          <button onClick={addEvent}>Add</button>
        </div>
      </div>
    </div>
  
    <div className="my-8 p-8">
      {events.map((event, index) => (
        <div className="flex justify-between text-black" key={index}>
          <img src={event.image} />
          <a href={event.link}>Link</a>
          <button className="bg-red-400 text-white p-1" onClick={() => deleteEvent(event._id)}>Delete</button>
          <button className="bg-blue-400 text-white p-1" onClick={() => editEvents(event)}>Edit</button>
        </div>
      ))}
    </div>
  
  
   </>) : (<div className="text-center">
 <h1 className="text-3xl font-bold">Loading...</h1>
</div>)}
   </>

 );
};

export default MediaEventPage;
function convertBase64(...files) {
  return Promise.all(files.map(file => {
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
  }));
 }
 
