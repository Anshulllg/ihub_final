import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import PeopleAll from './PeopleAll';

const Peoplecard = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelectedComponent] = useState("All");

  useEffect(() => {
      axios.get('https://ihub-hbkk.onrender.com/member')
          .then(response => setUsers(response.data))
          .catch(error => console.error(error));
  }, []);

  function handleClick(componentName) {
      setSelectedComponent(componentName);
  }
  console.log(users)
  return (
      <div className="my-12">
          <div className='flex justify-between'>
              <div className='justify-start'>
                 <div className="font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688]" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">People</div>
                 {/* <div className='z-10 h-32 w-32 rounded-full relative top-8' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)' }}></div> */}
              </div>
              <div className='justify-end hidden md:block' data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">
                 <div className="flex gap-16">
                     <p onClick={() => handleClick('All')}>
                         <div className={`${
                    selected === "All" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}>All</div>
                     </p>
                     <p onClick={() => handleClick('Board of Directors')}>
                         <div className={`${
                    selected === "Board of Directors" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}>Directors</div>
                     </p>
                     <p onClick={() => handleClick('Hub governing Body')}>
                         <div className={`${
                    selected === "Hub governing Body" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}>Governing</div>
                     </p>
                     <p onClick={() => handleClick('Leadership')}>
                         <div className={`${
                    selected === "Leadership" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}>Leadership</div>
                     </p>
                     <p onClick={() => handleClick('Team')}>
                         <div className={`${
                    selected === "Team" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}>Team</div>
                     </p>
                 </div>
              </div>
          </div>
          <hr className='border-2 my-12 border-blue-200'/>
          {selected === "All" ? <PeopleAll /> : (
              <div className='grid md:grid-cols-4 grid-rows-1 md:gap-6 md:p-12'>
                 {users
                     .filter((user) => user.team.includes(selected))
                     .map((user, index) => (
                         <div key={index} className="text-center bg-white border-1 rounded-xl shadow-lg p-4 shadow-blue-500/30 justify-between z-10">
                             <div className='py-6 px-10 rounded-full'><Image src={user.image} width={178} height={178} className='rounded-full' alt="person" /></div>
                             <p className="cardtext1">{user.name}</p>
                             <p className="cardtext2 py-2">{user.position}</p>
                             <div className='flex gap-2 text-[#003688] justify-center'>
                                <a href={user.link} target="_blank" rel="noopener noreferrer"><BsLinkedin size={25} /></a>
                                <a href={`mailto:${user.mail}`} target="_blank" rel="noopener noreferrer"><IoMdMail size={28} /></a>
                             </div>
                         </div>
                     ))}
              </div>
          )}
      </div>
  );
}

export default Peoplecard;
