import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
const UserPage = () => {
  const { status, data } = useSession();
 const [name, setName] = useState("");
 const [team, setTeam] = useState([]);
//  const [link, setLink] = useState("");
 const [mail, setMail] = useState("");
 const [position, setPosition] = useState("");
 const [link, setLink] = useState("");
 const [users, setUsers] = useState([]);
 const [editUser, setEditUser] = useState(null);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [image, setImage] = useState(null);

 useEffect(() => {
  if (status === "unauthenticated") Router.replace("/auth/login");
   axios.get('https://ihub-hbkk.onrender.com/member')
     .then(response => setUsers(response.data))
     .catch(error => console.error(error));
 }, [status]);

 useEffect(() => {
   if (editUser) {
     setEditUser({
       ...editUser,
       name: name,
       link: link,
       mail: mail,
       position: position
     });
   }
 }, [name, team, link, mail, position]);

 const deleteMember = (id) => {
   axios.delete(`https://ihub-hbkk.onrender.com/member/delete/${id}`)
     .then(() => setUsers(prevUsers => prevUsers.filter(user => user._id !== id)))
     .catch(error => console.error(error));
 };

 const addMember = () => {
  console.log(team);
  convertBase64(image).then(base64Image => {
    axios.post("https://ihub-hbkk.onrender.com/member/add", {
      name: name,
      team: team,
      link: link,
      image: base64Image,
      mail: mail,
      position: position
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err.response.data);
      });
  });
 };

 const updateUser = (id, updatedUser) => {
   axios.put(`https://ihub-hbkk.onrender.com/member/${id}`, updatedUser)
     .then(() => {
       setUsers(prevUsers => prevUsers.map(user => user._id === id ? updatedUser : user));
       setEditUser(null);
       setIsModalOpen(false);
     })
     .catch(error => console.error(error));
 };

 const editUsers = (user) => {
   setEditUser(user);
   setIsModalOpen(true);
 };

 const handleImageChange = (e) => {
   setImage(e.target.files[0]);
 }

 return (
  <>
  {status === "authenticated" ? (
  <>
  <div className="p-8 my-12">
    <p className="text-bold  text-bold"> Edit people information here</p>
    (Note: Please use images in png format only)
    <div className="space-y-2 space-x-4">
    <textarea
  className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
  onChange={(e) => setName(e.target.value)}
  name="name"
  placeholder="Name"
>
  {name}
</textarea>
      <div className="p-8 grid grid-cols-2 gap-4 bg-gray-200 rounded-xl   border-2 border-gray-500">
        <p className="font-bold">Team</p>
        <div>
        <label>Directors</label>
        <input type="checkbox" onChange={(e) => setTeam([...team, e.target.value])} value="Directors" />
        </div>
        
        <div>
        <label>Governing</label>
        <input type="checkbox" onChange={(e) => setTeam([...team, e.target.value])} value="Governing" />
        </div>
        <div>
        <label>Leadership</label>
        <input type="checkbox" onChange={(e) => setTeam([...team, e.target.value])} value="Leadership" />
        </div>
        
        <div>
        <label>Team</label>
        <input type="checkbox" onChange={(e) => setTeam([...team, e.target.value])} value="Team" />
        </div>
        
        


      </div>
      <textarea className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500' onChange={(e) => setLink(e.target.value)} name="link" value={link} placeholder="Linkedin Link" />
<textarea className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500' onChange={(e) => setMail(e.target.value)} name="mail" value={mail} placeholder="email" />
<textarea className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500' onChange={(e) => setPosition(e.target.value)} name="position" value={position} placeholder="Position" />
<input className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500' type="file" onChange={handleImageChange} />

      <div className="flex justify-between">
        <button className="bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={addMember}>Add</button>
      </div>
    </div>
  </div>

  <div className="my-8 p-8  space-y-2">
    {users.map((user, index) => (
      <div className="grid grid-cols-4 gap-4 text-black" key={index}>
      <p>{user.name}</p>
      <p>{user.team}</p>
      {/* <p>{user.link}</p>*/}
      {/* <img src={user.image} alt={user.name} className="w-20 h-20" />  */}
      <button className="bg-red-400 text-white p-1" onClick={() => deleteMember(user._id)}>Delete</button>
      <button className="bg-blue-400 text-white p-1" onClick={() => editUsers(user)}>Edit</button>
    </div>
    ))}
  </div>

  {isModalOpen && (
    <div className="modal border-2 border-black-400 p-4 mx-auto my-auto">
      <div className="modal-content">
        <button className="bg-red-500 hover:bg-red-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" onClick={() => setIsModalOpen(false)}>Close</button>
        <form onSubmit={(e) => {
          e.preventDefault();
          updateUser(editUser._id, { name: name, link: link, mail: mail, position: position });
        }}>
          <input type="text" value={editUser ? editUser.name : ''} onChange={(e) => setName(e.target.value)} />
          {/* <input type="text" value={editUser ? editUser.team : ''} onChange={(e) => setTeam(e.target.value)} /> */}
          <input type="text" value={editUser ? editUser.link : ''} onChange={(e) => setLink(e.target.value)} />
          <input type="email" value={editUser ? editUser.mail : ''} onChange={(e) => setMail(e.target.value)} />
          <input type="text" value={editUser ? editUser.position : ''} onChange={(e) => setPosition(e.target.value)} />
          <button className=" bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white" type="submit">Update</button>
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

export default UserPage;

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
