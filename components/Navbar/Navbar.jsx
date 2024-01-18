// import React, {useState} from 'react';
// import Image from "next/image"
// import ihubheader from "../../assets/ihubheader.png";
// import iiitdlogo from "../../assets/iiitdlogo.png";
// import dst2 from "../../assets/dst2.png";
// import Link from 'next/link';
// import LinkNav from "./LinkNav"

// const Navbar = () => {
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

//         <div className= " w-full shadow-lg shadow-blue-300/25 rounded-b-2xl  py-4 px-16" >
//             <div className='flex justify-between '> 
//                 <div><Image className="" src={ihubheader} width={414} height={83} alt="iHub logo"/></div>

//                 <div> <Image  src={dst2} width={350} height={96} alt="dst Image"/></div>

//                 <div> <Image src={iiitdlogo} width={166} height={83} alt="iiitd logo"/></div>
//             </div>

//         </div>

        
//         <LinkNav/>
        
//         <div style={{width: '100%', height: '100%', background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)', borderRadius: 9999}} />
    
   

//     </>)
// }
// export default Navbar

import React, {useState} from 'react';
import Image from "next/image"
import ihubheader from "../../assets/logo2.png";
import iiitdlogo from "../../assets/iiitd.jpg";
import dst2 from "../../assets/dst2.png";
import Link from 'next/link';
import LinkNav from "./LinkNav"
import lcp from "../../assets/lcp.png"

const Navbar = () => {
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

        <div className= " z-30 w-full  shadow-lg shadow-blue-300/25 rounded-b-2xl  py-4 z-10 md:px-12" >
            <div className='flex md:justify-evenly md:gap-48 pb-4 md:pb-0 justify-start md:w-full w-3/4'> 
                <a className='md:block hidden' ><Image className="" src={ihubheader} width={350} height={100} alt="iHub logo"/></a>
                <a className='md:block hidden' href='https://nmicps.in/'> <Image  src={lcp} width={160} height={80} alt="dst Image"/></a>

                <a className='md:block hidden' href='https://dst.gov.in/'> <Image  src={dst2} width={550} height={130} alt="dst Image"/></a>

                <a className='md:block hidden' href='https://iiitd.ac.in/'> <Image className=" " src={iiitdlogo} width={650} height={380} alt="iiitd logo"/></a>
            </div>

        </div>

        <LinkNav/>
        
        
    
   

    </>)
}
export default Navbar