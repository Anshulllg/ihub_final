import React, {useState} from 'react';
import Image from "next/image"
import img2 from "../../assets/img2.png";
import enterr from "../../assets/enterr.png";
import Link from 'next/link';
import Schemecard from "./Schemecard"

const Entrepreneurship = () => {
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
        
        <div className= "md:py-24 md:px-12 p-2">
           

            <div className='flex flex-col md:flex-row gap-5'>

                <div className=''>
 
                    <p className="content pb-10 " data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">The iHub Anubhuti's Technology Business Incubator (TBI) serves as a purposeful platform nurturing<br></br> startups in cognitive computing and social sensing. Our core aim is to foster job creation,<br></br> innovation, and a robust startup ecosystem by connecting academia, financial institutions, industries, and more.<br></br> Leveraging diverse resources, we empower these startups to thrive.</p>
                    <div className="  flex  bg-white border-[1px] p-8  rounded-2xl shadow-lg shadow-blue-500/30  z-10">
                        <div className=' '>
                            <p className='content2 pb-4 '>Within the realm of iHub Anubhuti TBI, we extend a comprehensive array of offerings, including:</p>
                            <p className='content list-inside' data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">
                                <li>Tailored workspace solutions and amenities for shared office spaces</li>
                                <li>Unrestricted access to Hi-tech lab Facilities</li>
                                <li>Facilitation of funding opportunities</li>
                                <li>Facilitating invaluable connections within the industrial network.</li>
                                <li>Expert mentoring spanning crucial areas such as strategic business planning, and <br></br>technical mentorship</li></p>
                        </div>
                    </div>
                    
                </div>

                <div className=''>
                    <div className=' pt-12'><Image src={enterr} width={500} height={500} alt="Entrepreneur"/></div>
                </div>
    

            </div>
            <div className='my-12' >
                {/* <div className= "heading  text-center justify-center  " >Sanctioned Research Grant</div> */}
                {/* <div className=' z-10 h-[212px] w-[212px] rounded-full  mx-auto' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            </div>
            
        </div>

        <Schemecard/>
    </>)
}
export default Entrepreneurship