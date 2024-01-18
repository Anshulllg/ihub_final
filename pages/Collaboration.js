import React, {useState,useEffect} from 'react';

import axios from 'axios';


export default function Home() {
  const [selected, setSelectedComponent] = useState('Academics');
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get('https://ihub-hbkk.onrender.com/collab')
    .then(response => setEvents(response.data))
    .catch(error => console.error(error));
    }, []);
  const handleClick = (component) => {
    setSelectedComponent(component);
  };


  return (
    <>
      <div className="md:p-24 p-14 overflow-x-hidden">
        <div className="flex md:justify-between flex-col md:flex-row h-fit my-12 md:text-left text-center ">
          <div className="flex justify-start">
            

            <div className="z-30 heading  " data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">
              Collaboration
            </div>
          </div>
          <div className="my-auto heading2  flex flex-col md:flex-row gap-12 " data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="000">
            <p
              onClick={() => {
                handleClick('Academics');
              }}
            >
              <div>
                <div
                  className={`${
                    selected === "Academics" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}
                >
                  Academics
                </div>
                
              </div>
            </p>

            <p
              onClick={() => {
                handleClick('Industry');
              }}
            >
              <div>
                <div
                  className={`${
                    selected === "Industry" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}
                >
                  Industry
                </div>
                
              </div>
            </p>
          </div>
        </div>
        <hr className="border-2 -my-8 border-blue-200" />
        
        {events.map((event, index) => {
          if(event.type == selected){
            return(<>
              <div className="bg-white border-[1px]  rounded-3xl shadow-lg shadow-blue-500/30 md:my-12 my-8">
                              
                              <p className=" font-semibold text-2xl p-2 text-center md:text-start md:p-4">{event.name}</p>
                              <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-3 md:p-16 p-4'>
                                  <img src={event.image1} className="md:col-span-1 col-span-2" />
                                  <img src={event.image2} className="md:col-span-1 col-span-2" />
                                  <img src={event.image3} className="md:col-span-1 col-span-2" />
                                  <img src={event.image4} className="md:col-span-1 col-span-2" />
                              </div>
                                 
                              
                          </div>
              </>)
          }
    
})}
      </div>
    </>
  );
}
