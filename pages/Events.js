import React, { useState,useEffect } from 'react';
import Dashboard from "../components/Dashboard/Dashboard";
import Media from "../components/Events/Media";
import Mediacard from "../components/Events/Mediacard";
import Workshop from "../components/Events/Workshop";
import Webinar from "../components/Events/Webinar";
import Newsletter from "../components/Events/Newsletter";
import Blogs from "../components/Events/Blog"
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Home() {
 const [selectedComponent, setSelectedComponent] = useState('Media');
 useEffect(() => {
  AOS.init();
}, []);
 function handleClick(componentName) {
   setSelectedComponent(componentName);
 }

 return (
   <div className="md:py-12 md:px-40 p-3">
     <div className="flex justify-between md:flex-row flex-col">
       <div className="justify-start">
        {/* <div className='heading1'>  <h1 className="text-4xl md:text-2xl font-bold">Event</h1></div>
       
         <div className=' z-10 h-28 w-28 rounded-full relative bottom-20 right-12' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
        <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688]  p-14" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">Events</div>
           
           {/* <div className=' z-10 h-32 w-32 rounded-full relative  top-8' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
           
       </div>
       <div className="justify-end">
         <div className="grid md:grid-cols-5 grid-cols-2 md:gap-10 gap-1 py-14" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">
           <p onClick={() => handleClick('Media')}>
           <div className={`${
                    selectedComponent === "Media" ? " bg-blue-200 rounded-full px-4 text-blue-700" : ""
                  }`} >Media</div>
                        
           </p>
           <p onClick={() => handleClick('Webinar')}><div className={`${
                    selectedComponent === "Webinar" ? " bg-blue-200 rounded-full px-4 text-blue-700" : ""
                  }`} >Webinar</div>
                        </p>
           <p onClick={() => handleClick('Workshops')}><div className={`${
                    selectedComponent === "Workshops" ? " bg-blue-200 rounded-full px-4 text-blue-700" : ""
                  }`}>Workshop</div>
                        </p>
           <p onClick={() => handleClick('NewsLetter')}><div className={`${
                    selectedComponent === "NewsLetter" ? " bg-blue-200 rounded-full px-4 text-blue-700" : ""
                  }`} >NewsLetter</div>
                        </p>

                        <p onClick={() => handleClick('Blogs')}><div className={`${
                    selectedComponent === "Blogs" ? " bg-blue-200 rounded-full px-4 text-blue-700" : ""
                  }`} >Blogs</div>
                        </p>
                        {/* <p onClick={() => handleClick('Blogs')}><div className= " absolute ml-4 py-20" >Blogs</div> */}
                        {/* <div className='  z-10 h-[60px] w-[60px] rounded-full mt-16  ' style={{ background: `${selectedComponent === 'Blogs' ? "linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%) ": "rgba(169, 169, 169, 0.15)"}`}} ></div></p> */}
         </div>

       </div>
       
     </div>
     <hr className='border-2 my-8 border-blue-200' />
                <div className='' data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">
     {selectedComponent === 'Media' && <Mediacard/>}
     {selectedComponent === 'Webinar' && <Webinar/>}
     {selectedComponent === 'Workshops' && <Workshop/>}
     {selectedComponent === 'NewsLetter' && <Newsletter/>}
     {selectedComponent === 'Blogs' && <Blogs/>}
     </div>
   </div>
 );
}
