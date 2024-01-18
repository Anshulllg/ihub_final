// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import img2 from '../../assets/img2.png';
// import ihublogo from '../../assets/ihublogo.png';

// const News = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [canvasVisible, setCanvasVisible] = useState(false);

//   const handleButtonHover = () => {
//     setCanvasVisible(true);
//   };

//   const handleButtonLeave = () => {
//     setCanvasVisible(false);
//   };

//   const items = [
//     <div key={1}>Content 1</div>,
//     <div key={2}>Content 2</div>,
//     <div key={3}>Content 3</div>,
//     // Add more items as needed
//   ];

//   useEffect(() => {
//     const handleScroll = (e) => {
//       const delta = e.deltaY;
//       const sensitivity = 50;

//       if (delta > sensitivity) {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//       } else if (delta < -sensitivity) {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === 0 ? items.length - 1 : prevIndex - 1
//         );
//       }
//     };

//     const container = document.getElementById('scroll-container');
//     container.addEventListener('wheel', handleScroll);

//     return () => {
//       container.removeEventListener('wheel', handleScroll);
//     };
//   }, [currentIndex, items.length]);

//   return (
//     <>
//       <div className="my-12 md:p-24 p-8 text-center md:text-left">
//         <div className="text-5xl mb-8 font-bold">News</div>
//         {/* <div
//           className="z-10 h-40 w-40 rounded-full relative bottom-28 -left-10"
//           style={{
//             background:
//               'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)',
//           }}
//         ></div> */}

//         <div
//           className="p-10 bg-white border-[1px] w-full rounded-2xl shadow-lg shadow-blue-500/30 justify-between overflow-hidden"
//           id="scroll-container"
//         >
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default News;


import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image"
import img2 from "../../assets/img2.png";
import ihublogo from "../../assets/ihublogo.png";
import axios from 'axios';

const News = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [events, setEvents] = useState([]);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/news')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
        }, []);
        console.log(events)
    return( <>
        
        <div className= " my-48 ">
        <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] mb-8" >
            <p className='md:mx-0 mx-auto'>News and Updates</p></div>
            
            {/* <div className=" md:p-10 p-4 bg-white border-[1px] md:h-[550px] overflow-y-scroll rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
                {events.map((e, index)=>{
                    return(<>
                    <div className='flex space-x-4 content pb-4'>
                    <div className=''><Image src={ihublogo} width={30} height={30} alt="link"/></div>
                    <div> <a href={`${e.link}`}>{e.name}</a></div>
                </div>
                    </>)
                })}
                

    
                
            </div> */}

<ul className="md:p-10 p-4 bg-white border-[1px] md:h-[550px] overflow-y-scroll rounded-2xl shadow-lg shadow-blue-500/30 justify-between custom-scrollbar">
    {events.map((e, index) => (
        <li key={index} data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="800"  className=' pl-4 list-disc space-x-4 content pb-4'>
            {/* <div><Image src={ihublogo} width={30} height={30} alt="link" /></div> */}
            <div className='list-disc'><a href={`${e.link}`}>{e.name}</a></div>
        </li>
    ))}
</ul>

            

                
            {/* </div> */}
        </div>
    </>)
}
export default News