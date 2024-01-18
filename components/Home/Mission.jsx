// import React, {useState} from 'react';
// import Image from "next/image"
// import mission from "../../assets/mission.png";

// const Mission = () => {
//     const [canvasVisible, setCanvasVisible] = useState(false);
//     const handleButtonHover = () => {
//         setCanvasVisible(true)
//         // console.log("hello")
//     }
//     const handleButtonLeave = () => {
//         setCanvasVisible(false)
//         // console.log("bye")
//     }
//     return( <>
        
// <div className='md:p-24 p-8 text-center md:text-left'>

// <div className=''>
// <div className="font-bold text-5xl">Our Mission</div>
         
// </div>
// <div className="flex my-8 md:flex-row flex-col overflow-hidden justify-evenly gap-10">
//         <div className='flex-1'>
          
//           <p className="content">
//             The mission of iHub Anubhuti is to provide a thriving ecosystem in India for research,
//             development, & entrepreneurship in the area of ‘Cognitive Computing & Social Sensing’
//             and collaborate with Industries, Ministries and Startups to develop technological
//             solutions which can address short-term and long-term societal needs.
//           </p>
//         </div>
//         <div className='flex-1 '>
          
//           <div className='z-20 '>
//             <Image src={mission} width={400} height={250} alt="Vision Image" />
//           </div>
          
//         </div>
//       </div>

// </div>
        
//     </>)
// }
// export default Mission
import React, {useState, useEffect} from 'react';
import Image from "next/image"
import mission from "../../assets/mission.png";
import AOS from "aos";
import 'aos/dist/aos.css';
const Mission = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    useEffect(() => {
        AOS.init();
    }, []);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        <div className='my-36'>
        <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] " >
            <p className='md:mx-0 mx-auto'>Our Mission</p></div>
        <div className= " flex md:flex-row flex-col gap-12">

            <div className=' md:w-1/2 md:text-left text-justify'>
                
                
                <p className=" font-normal text-justify my-16 " data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="800">The mission of iHub Anubhuti is to provide a thriving ecosystem in India for research, development, & entrepreneurship in the area of ‘Cognitive Computing & Social Sensing (CC&SS)’ and collaborate with industries, ministries, and academicians to develop technological solutions that can address short-term and long-term societal needs.</p>
            </div>
            <div className='  md:w-1/2'>
                
                <div className='flex justify-center'
                
                ><Image data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="800"  src={mission} width={400} height={250} alt="Vision Image"/></div>
                
            </div>  

            

              
        </div>
        </div>

       
    </>)
}
export default Mission