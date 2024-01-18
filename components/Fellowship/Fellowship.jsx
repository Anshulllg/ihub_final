import React, {useState} from 'react';
import Image from "next/image"
import img2 from "../../assets/img2.png";
import Entrepreneur from "../../assets/Entrepreneur.png";
import Link from 'next/link';
import Fellowshipcard from "./Fellowshipcard"
import src from "../../assets/image162.png"
import fellow from "../../assets/fellow.png"
const Fellowship = () => {
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
        
        <div className= "md:py-24 md:px-12 p-2" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">
            <div className='flex gap-10 md:flex-row flex-col'>

                <div className=''>
 
                    <p className="">TiH aims at building a collaboration between industries, academia, and government<br></br> agencies on developing data driven cognitive computing solutions, mainly in verticals<br></br> - Healthcare, Legal Information System and Education in CC&SS. It will also encourage and<br></br> promote entrepreneurial activities and start-ups in the areas of “Cognitive Computing & <br></br> Social Sensing”.</p>
                    <p className=" my-4 ">iHUB Anubhuti’s Comprehensive and Holistic Advancement of National Knowledge Yield<br></br> and Analytics (CHANAKYA) are a great opportunity for the undergraduate students to<br></br> enhance their learning, explore entrepreneurial skills and innovate across domains.</p>
                    
                </div>
                <div className='' data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="000">
                    <div className=' z-10 -mt-10'><Image src={fellow} width={400} height={400} alt="Entrepreneur"/></div>
                </div>

            </div>
            
            
        </div>

        <Fellowshipcard/>

    </>)
}
export default Fellowship