import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from "next-auth/react";
import Router from "next/router";

const ModelPage = () => {
  const { status, data } = useSession();
  const [name, setName] = useState("");
  const [About, setAbout] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [link, setLink] = useState("");
  const [guidelines, setGuidelines] = useState("");
  const [models, setModels] = useState([]);
  const [slogo_link, setSlogo] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/login");
    axios.get('https://ihub-hbkk.onrender.com/entre/')
      .then(response => setModels(response.data))
      .catch(error => console.error(error));
  }, [status]);

  const addModel = () => {
    axios.post("https://ihub-hbkk.onrender.com/entre/add", {
      name: name,
      About: About,
      duration: duration,
      type: type,
      eligibility: eligibility,
      link: link,
      guidelines: guidelines,
      slogo_link: slogo_link
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const deleteModel = (id) => {
    axios.delete(`https://ihub-hbkk.onrender.com/entre/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          setModels(prevModels => prevModels.filter(model => model._id !== id))
        } else {
          console.error('Error deleting model');
        }
      })
      .catch(error => console.error(error));
  };

  const updateModel = (id, updatedModel) => {
    axios.put(`https://ihub-hbkk.onrender.com/entre/${id}`, updatedModel)
      .then(() => {
        setModels(prevModels => prevModels.map(model => model._id === id ? updatedModel : model));
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      {status === "authenticated" ? (
        <div className='my-20 p-8 space-x-2 space-y-2'>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            placeholder="Name"
            rows={3}
          ></textarea>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setAbout(e.target.value)}
            name="About"
            value={About}
            placeholder="About"
            rows={3}
          ></textarea>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setDuration(e.target.value)}
            name="duration"
            value={duration}
            placeholder="Duration"
            rows={3}
          ></textarea>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setType(e.target.value)}
            name="type"
            value={type}
            placeholder="Type"
            rows={3}
          ></textarea>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setEligibility(e.target.value)}
            name="eligibility"
            value={eligibility}
            placeholder="Eligibility"
            rows={3}
          ></textarea>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setGuidelines(e.target.value)}
            name="guidelines"
            value={guidelines}
            placeholder="Guidelines link"
            rows={5}
          ></textarea>
          <textarea
            className='bg-gray-200 hover:border-slate-900 rounded-xl p-2 border-2 border-gray-500'
            onChange={(e) => setLink(e.target.value)}
            name="link"
            value={link}
            placeholder="Link"
            rows={3}
          ></textarea>
              <input className='bg-gray-200 hover:border-slate-900  rounded-xl  p-2 border-2 border-gray-500' onChange={(e) => setSlogo(e.target.value)} name="slogo_link" value={slogo_link} placeholder="Slogo Link" />
          <button className=' mt-4 mb-10 bg-blue-400 hover:bg-blue-600 rounded-xl py-2 px-6 border-2 border-blue-500 text-white' onClick={addModel}>Add</button>
          {models.map((model, index) => (
            <div className=' grid grid-cols-5 gap-4 text-black' key={index}>
              <p>{model.name}</p>
              {/* <p>{model.About}</p>
              <p>{model.duration}</p>
              <p>{model.type}</p>
              <p>{model.eligibility}</p> */}
              {/* <p>{model.link}</p> */}
              <button className="bg-red-400 text-white p-1" onClick={() => deleteModel(model._id)}>Delete</button>
              <button className="bg-blue-400 text-white p-1" onClick={() => updateModel(model._id, { name: name, About: About, duration: duration, type: type, eligibility: eligibility, link: link })}>Update</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      )}
    </>
  );
};

export default ModelPage;
