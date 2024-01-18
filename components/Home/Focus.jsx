
import React, {useState} from 'react';
import Image from "next/image"

import health from "../../assets/health.png";

import edu from "../../assets/edu.png";
import earth from "../../assets/earth.png";
import law from "../../assets/law.png";
import { Link } from '@mui/material';

const Focus = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    const handleClick = (input) =>{
        console.log(input)
        // localStorage.setItem('myData', JSON.stringify(input));

    }
    return( <>
        
        <div className= " my-20 p-2">
        <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] mb-4" >
            <p className='md:mx-0 mx-auto md:pb-12'>Our Focus Areas</p></div>
            {/* <div className=' z-10 h-40 w-40 rounded-full relative -top-[120px] right-16' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            <div className=''>
                <div className=' py-10 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
                    <div className='cardtext22 text-center mb-8'>Cognitive Computing and Social Science</div>
                    <div className='flex justify-evenly flex-col md:flex-row gap-4 md:p-0 p-4'>
                        
                
        
                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800" className="bg-white hover:bg-blue-50 border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between ">
                    <p className="cardtextt pt-8 px-6 text-center ">Transforming Healthcare</p>
                    <div className='md:pt-[50px]  px-6'><Image src={health} width={227} height={217} alt="health"/></div>
                </div>

                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800" className="bg-white hover:bg-blue-50  border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
                   
                    <p className="cardtextt  pt-8 px-6 text-center ">Revolutionising Education and Skill Development</p>
                    <div className='md:py-[20px]  px-6'><Image src={edu} width={227} height={217} alt="edu"/></div>
                    
                
                </div>
                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800" className="bg-white hover:bg-blue-50 border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
                   
                    <p className="cardtextt  pt-8 px-6 text-center">Achieving Sustainability</p>
                    <div className='md:py-[55px]   px-6'><Image src={earth} width={227} height={217} alt="earth"/></div>
                    
               
                </div>
                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800" className="bg-white hover:bg-blue-50 border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
                   
                    <p className="cardtextt pt-8 px-6 text-center ">Advancing Legal Services</p>
                    <div className='md:py-[16px]  px-6'><Image src={law} width={227} height={217} alt="law"/></div>
                    
              
                </div>
                </div>

                </div>
            </div>
        </div>
    </>)
}
export default Focus