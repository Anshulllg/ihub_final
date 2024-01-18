import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";

const StartupPage = () => {
    const { status, data } = useSession();
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState(null);
    const [collaborators, setCollaborators] = useState([""]);
    const [abstract, setAbstract] = useState("");
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [trl, setTrl] = useState("");
    const [user_image, setUserImage] = useState(null);
    const [citations, setCitations] = useState([{ title: "", authors: [""] }]);
   
    const [startups, setStartups] = useState([]);
    const [editStartup, setEditStartup] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/login");
    axios.get('https://ihub-hbkk.onrender.com/startup')
     .then(response => setStartups(response.data))
     .catch(error => console.error(error));

     console.log(startups);
    }, [status]);
   console.log(startups);
    useEffect(() => {
    if (editStartup) {
     setEditStartup({
       ...editStartup,
       title: title,
       name: name,
       image: image,
       collaborators: collaborators,
       abstract: abstract,
       area: area,
       address: address,
       phone: phone,
       email: email,
       website: website,
       trl: trl,
       citations: citations,
     });
    }
    }, [title, name, image, collaborators, abstract, area, address, phone, email, website, trl, citations]);
   
    const deleteStartup = (id) => {
    axios.delete(`https://ihub-hbkk.onrender.com/startup/delete/${id}`)
     .then(res => {
       if (res.status === 200) {
         setStartups(prevStartups => prevStartups.filter(startup => startup._id !== id))
       } else {
         console.error('Error deleting startup');
       }
     })
     .catch(error => console.error(error));
    };
   
    const addStartup = () => {
    convertBase64(image, user_image).then(base64Image => {
     axios.post("https://ihub-hbkk.onrender.com/startup/add", {
       title: title,
       name: name,
       link: link,

       image: base64Image[0],
image: base64Image[1],
       collaborators: collaborators,
       abstract: abstract,
       area: area,
       address: address,
       phone: phone,
       email: email,
       website: website,
       trl: trl,
       citations: citations,
     })
     .then(res => {
       console.log(res.data);
     })
     .catch(err => {
       console.error(err.response.data);
     });
    });
    };
   
    const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    }
    const handleUserImageChange = (e) => {
    setUserImage(e.target.files[0]);
    }
   
    const updateStartup = (id, updatedStartup) => {
    axios.put(`https://ihub-hbkk.onrender.com/startup/${id}`, updatedStartup)
     .then(() => {
       setStartups(prevStartups => prevStartups.map(startup => startup._id === id ? updatedStartup : startup));
       setEditStartup(null);
       setIsModalOpen(false);
     })
     .catch(error => console.error(error));
    };
   
    const editStartups = (startup) => {
    setEditStartup(startup);
    setIsModalOpen(true);
    };
   
    const handleCitationChange = (index, field, value) => {
      let newCitations = [...citations];
      newCitations[index][field] = value;
      setCitations(newCitations);
    //   console.log(citations);
     };
   
     const handleCollaboratorChange = (index, value) => {
        let newCollaborators = [...collaborators];
        newCollaborators[index] = value;
        setCollaborators(newCollaborators);
       };
   
      const addCollaborator = () => {
        setCollaborators([...collaborators, ""]);
       };
   
    const addCitation = () => {
      setCitations([...citations, { title: "", authors: [""] }]);
        console.log(citations);
     }
   
 // Rest of the code remains the same
 return(<>
 <div className="my-20 p-20">
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Title"
    onChange={(e) => setTitle(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Name"
    onChange={(e) => setName(e.target.value)}
  ></textarea>
  <input className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500" type="file" onChange={handleImageChange} />
  <input className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500" type="file" onChange={handleUserImageChange} />
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Link"
    onChange={(e) => setLink(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Abstract"
    onChange={(e) => setAbstract(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Area"
    onChange={(e) => setArea(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Address"
    onChange={(e) => setAddress(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Phone"
    onChange={(e) => setPhone(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="Website"
    onChange={(e) => setWebsite(e.target.value)}
  ></textarea>
  <textarea
    className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
    style={{ width: '100%' }}
    placeholder="TRL"
    onChange={(e) => setTrl(e.target.value)}
  ></textarea>
  <button className="bg-blue-400 text-white p-2 rounded-lg  hover:bg-blue-800 border-2  border-slate-500 hover:border-slate-800" onClick={addCollaborator}>Add Collaborator</button>
  {collaborators.map((collaborator, index) => (
    <textarea
      key={index}
      className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
      style={{ width: '100%' }}
      placeholder="Collaborators"
      value={collaborator}
      onChange={(e) => handleCollaboratorChange(index, e.target.value)}
    ></textarea>
  ))}

  <button className="bg-blue-400 text-white p-2 rounded-lg  hover:bg-blue-800 border-2  border-slate-500 hover:border-slate-800" onClick={addCitation}>Add Citation</button>
  {citations.map((citation, index) => (
    <div key={index}>
      <textarea
        className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
        style={{ width: '100%' }}
        placeholder="Title"
        value={citation.title}
        onChange={(e) => handleCitationChange(index, "title", e.target.value)}
      ></textarea>
      <textarea
        className="bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500"
        style={{ width: '100%' }}
        placeholder="Authors"
        value={citation.authors.join(", ")}
        onChange={(e) => handleCitationChange(index, "authors", e.target.value.split(", "))}
      ></textarea>
    </div>
  ))}

  <button className="bg-blue-400 text-white p-2 rounded-lg  hover:bg-blue-800 border-2  border-slate-500 hover:border-slate-800" onClick={addStartup}>Add Startup</button>
</div>

<div className="my-8 p-8">
  {startups.map((startup, index) => (
    <div key={index} className="grid grid-cols-3">
      <p>{startup.title}</p>
      <p>{startup.name}</p>
      <button className="bg-red-500 hover:bg-red-300 text-white py-px px-1" onClick={() => deleteStartup(startup._id)}>
        Delete
      </button>
    </div>
  ))}
</div>

 </>
 )
};

export default StartupPage;

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
