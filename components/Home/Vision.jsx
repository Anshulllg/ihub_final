// import React, {useState} from 'react';
// import Image from "next/image"
// import vision from "../../assets/vision.png";

// const Vision = () => {
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
//     <div className='my-40 overflow-x-hidden md:p-24 p-8'>
//         <div className=' w-full mb-4 text-center md:text-right'>
//         <div className= "font-bold text-5xl">Our Vision
//         </div>   
//         </div>
//         <div className= "flex flex-col md:flex-row gap-4 md:space-y-20">

//             <div className='flex-1 '>
//                 {/* <div className=' z-10 h-40 w-40 rounded-full -my-[120px] -ml-20' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
//                 <div className='z-20 '><Image  src={vision} width={400} height={250} alt="Vision Image"/></div>
//                 {/* <div className=' z-10 h-36 w-36 rounded-full -my-28 ml-[330px]' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
//             </div>  

//             <div className='flex-1'>
//                 <p className="">To establish itself as a hub of Research, Entrepreneurship, and Innovation in the area of Cognitive Computing & Social Sensing. Build a nationwide shared and distributed Cognitive Computing & Social Sensing facility for public research and commercialization.</p>
                
//             </div>

              
//         </div>
//         </div>
//     </>)
// }
// export default Vision
import React, {useState} from 'react';
import Image from "next/image"
import img222 from "../../assets/img222.png";

const Vision = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        
        <div className= " flex md:flex-row flex-col-reverse ">

            <div className='md:w-1/2 p-4'>
                
                <div className=''
                ><Image data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="800" src={img222} width={400} height={250} alt="Vision Image"/></div>
                
            </div>  

            <div className='md:w-1/2'>
            <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] mb-12" >
            <p className='md:mx-0 mx-auto'>Our Vision</p></div>
                
                
                <p className="text-justify" data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="800">To establish itself as a hub of Research, Entrepreneurship, and Innovation in the area of Cognitive Computing & Social Sensing(CC&SS). Build a nationwide shared and distributed Cognitive Computing & Social Sensing(CC&SS) facility for public research and commercialization.
</p>
                
            </div>

              
        </div>
    </>)
}
export default Vision