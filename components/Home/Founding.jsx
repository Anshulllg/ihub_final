// import React, {useState} from 'react';
// import Image from "next/image"
// import dts from "../../assets/dts.png";
// import iiitd from "../../assets/iiitd.png";

// const Founding = () => {
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
        
//         <div className= "md:p-24 p-8">

//             <div className= " text-center font-bold text-5xl" >Founding Partners</div>
//             {/* <div className=' z-10 h-[212px] w-[212px] rounded-full relative bottom-36 left-[550px] ' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
//             <div className=' justify-center '>
//                 <div className='flex gap-20 flex-col md:flex-row ' >
//                     <div className='flex-1'>
//                         {/* <Image  src={dts} width={338} height={210} alt="dst Image"/> */}
//                     </div>
//                     <div className='flex-1 '>
//                         {/* <Image  src={iiitd} width={426} height={319} alt="iiitd Image"/> */}
//                     </div>
//                 </div>
                
//                 <p className="text-center justify-center content pt-6 ">iHub Anubhuti - IIITD Foundation, has been established by Indraprastha Institute of Information Technology Delhi as a Section 8 Company under the aegis of the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) of the Department of Science and Technology, Government of India, seed-funded by DST (Department of Science and Technology).</p>
//             </div>           
           
           

              
//         </div>
//     </>)
// }
// export default Founding


import React, {useState} from 'react';
import Image from "next/image"
import dts from "../../assets/dts.png";
import iiitd from "../../assets/IIITD.png";

const Founding = () => {
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
        
        <div className= " my-24 p-2  ">

        <div className= "font-bold md:text-5xl text-4xl w-full text-center  text-[#003688] " >
            <p className='md:mx-0 mx-auto'>Founding Partners</p></div>
            {/* <div className=' z-10 h-[212px] w-[212px] rounded-full relative bottom-36 left-[550px] ' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            <div className=''>
                <div className='flex gap-20 md:p-12 p-20 flex-col md:flex-row' >
                    <div className='w-1/2 pl-28 justify-center' data-aos="fade-top"
                data-aos-duration="1500"
                data-aos-delay="800">
                        <Image  src={dts} width={338} height={210} alt="dst Image"/>
                    </div>
                    <div className='w-1/2 -my-16 pl-16 justify-center' data-aos="fade-top"
                data-aos-duration="1500"
                data-aos-delay="800">
                        <Image className='' src={iiitd} width={450} height={330} alt="iiitd Image"/>
                    </div>
                </div>
                
                <p className="text-center justify-center md:text-justify pt-6 " data-aos="fade-top"
                data-aos-duration="1500"
                data-aos-delay="800">iHub Anubhuti - IIITD Foundation, has been established by Indraprastha Institute of Information Technology Delhi as a Section 8 Company under the aegis of the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) of the Department of Science and Technology, Government of India, seed-funded by DST (Department of Science and Technology).</p>
            </div>           
           
           

              
        </div>
    </>)
}
export default Founding