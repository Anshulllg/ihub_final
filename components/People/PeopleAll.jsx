import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const PeopleAll = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
    axios.get('https://ihub-hbkk.onrender.com/member')
        .then(response => setUsers(response.data))
        .catch(error => console.error(error));
}, []);

   return (
       <>
       {/* <div className='grid grid-cols-4 md:gap-6 p-4'> */}
       <div className='flex flex-col gap-6 md:p-12'>
       
               <div className=''>
                  <h2 className='text-3xl font-bold text-[#003688] mb-4 '>Board of Directors</h2>
                  <div className='grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-6'>
                  {users.filter((user) => user.team.includes("Board of Directors"))
                  .map((user, index) => (
                      <div key={index} className="text-center bg-white border-1 rounded-xl shadow-lg p-1 shadow-blue-500/30 justify-between z-10">
                      <div className='md:py-6 md:px-10 rounded-full'><Image src={user.image} width={178} height={178} className='rounded-full' alt="person" /></div>
                      <p className="cardtext1">{user.name}</p>
                      <p className="cardtext2 py-2">{user.position}</p>
                      <div className='flex gap-2 text-[#003688] justify-center'>
                        <a href={`${user.link}`} target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
                        <a href={`mailto:${user.mail}`} target="_blank" rel="noopener noreferrer"><IoMdMail size={28} /></a>
                      </div>
                    </div>
                  ))}
                  </div>
                  <h2 className='text-3xl font-bold text-[#003688] my-8'>Governing body</h2>
                  <div className='grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-6'>
                  {users.filter((user) => user.team.includes("Governing"))
                  .map((user, index) => (
                      <div key={index} className="text-center bg-white border-1 rounded-xl shadow-lg p-1 shadow-blue-500/30 justify-between z-10">
                      <div className='md:py-6 md:px-10 rounded-full'><Image src={user.image} width={178} height={178} className='rounded-full' alt="person" /></div>
                      <p className="cardtext1">{user.name}</p>
                      <p className="cardtext2 py-2">{user.position}</p>
                      <div className='flex gap-2 text-[#003688] justify-center'>
                        <a href={`${user.link}`} target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
                        <a href={`mailto:${user.mail}`} target="_blank" rel="noopener noreferrer"><IoMdMail size={28} /></a>
                      </div>
                    </div>
                  ))}
                  </div>
                  <h2 className='text-3xl font-bold text-[#003688] my-8'>Leadership</h2>
                  <div className='grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-6'>
                  {users.filter((user) => user.team.includes("Leadership"))
                  .map((user, index) => (
                      <div key={index} className="text-center bg-white border-1 rounded-xl shadow-lg p-1 shadow-blue-500/30 justify-between z-10">
                      <div className='md:py-6 md:px-10 rounded-full'><Image src={user.image} width={178} height={178} className='rounded-full' alt="person" /></div>
                      <p className="cardtext1">{user.name}</p>
                      <p className="cardtext2 py-2">{user.position}</p>
                      <div className='flex gap-2 text-[#003688] justify-center'>
                        <a href={`${user.link}`} target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
                        <a href={`mailto:${user.mail}`} target="_blank" rel="noopener noreferrer"><IoMdMail size={28} /></a>
                      </div>
                    </div>
                  ))}
                  </div>
                  <h2 className='text-3xl font-bold text-[#003688] my-8'>Team</h2>
                  <div className='grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-6'>
                  {users.filter((user) => user.team.includes("Team"))
                  .map((user, index) => (
                      <div key={index} className="text-center bg-white border-1 rounded-xl shadow-lg p-1 shadow-blue-500/30 justify-between z-10">
                      <div className='md:py-6 md:px-10 rounded-full'><Image src={user.image} width={178} height={178} className='rounded-full' alt="person" /></div>
                      <p className="cardtext1">{user.name}</p>
                      <p className="cardtext2 py-2">{user.position}</p>
                      <div className='flex gap-2 text-[#003688] justify-center'>
                        <a href={`${user.link}`} target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
                        <a href={`mailto:${user.mail}`} target="_blank" rel="noopener noreferrer"><IoMdMail size={28} /></a>
                      </div>
                    </div>
                  ))}
                  </div>
               </div>
           
       </div>
           
           {/* </div> */}
       </>
   );
}

export default PeopleAll;