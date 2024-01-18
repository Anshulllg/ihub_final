import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const HomePage = () => {
  const { status, data } = useSession();
 const [image, setImage] = useState(null);
 const [homes, setHomes] = useState([]);
 const [editHome, setEditHome] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
 axios.get('https://ihub-hbkk.onrender.com/home')
   .then(response => setHomes(response.data))
   .catch(error => console.error(error));
 }, [status]);

 useEffect(() => {
  if (editHome) {
    setEditHome({
      ...editHome,
      image: image
    });
  }
 }, [image]);

 const deleteHome = (id) => {
 axios.delete(`https://ihub-hbkk.onrender.com/home/delete/${id}`)
   .then(() => setHomes(prevHomes => prevHomes.filter(home => home._id !== id)))
   .catch(error => console.error(error));
 };

 const addHome = () => {
 convertBase64(image).then(base64Image => {
   axios.post("https://ihub-hbkk.onrender.com/home/add", {
     image: base64Image
   })
     .then(res => {
       console.log(res.data);
     })
     .catch(err => {
       console.error(err);
     });
 });
 alert("done")
 };

//  const updateHome = (id, updatedHome) => {
//  axios.put(`http://localhost:4000/home/${id}`, updatedHome)
//    .then(() => {
//      setHomes(prevHomes => prevHomes.map(home => home._id === id ? updatedHome : home));
//      setEditHome(null);
//      setIsModalOpen(false);
//    })
//    .catch(error => console.error(error));
//  };

//  const editHomes = (home) => {
//  setEditHome(home);
//  setIsModalOpen(true);
//  };

 const handleImageChange = (e) => {
 setImage(e.target.files[0]);
 }

 return (
  <>
  {status === "authenticated" ? (   <>
     <div className="p-20">
    <div className="space-y-2">
      <input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500 ' onChange={handleImageChange} name="image" type="file" />
      <div className="flex justify-between">
        <button className="bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addHome}>Add</button>
      </div>
    </div>
  </div>

  <div className="my-8 p-20">
    {homes.map((home, index) => (
      <div className="flex justify-between text-black" key={index}>
        <img src={home.image} alt={home.image} className="w-20 h-20" />
        <button className="bg-red-400 text-white p-1" onClick={() => deleteHome(home._id)}>Delete</button>
        {/* <button className="bg-blue-400 text-white p-1" onClick={() => editHomes(home)}>Edit</button> */}
      </div>
    ))}
  </div>
  </>) : (<div className="text-center">
 <h1 className="text-3xl font-bold">Loading...</h1>
</div>)}
  </>
 
 );
};

export default HomePage;

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
