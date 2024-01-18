import React, {useState, useEffect} from 'react';
import Image from "next/image"
import ihublogo from "../../assets/ihublogo.png";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";
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
    <div>
        <div className= "font-bold md:text-3xl text-2xl w-full text-center  md:text-left text-[#003688] " >
            <p className='md:mx-0 mx-auto'>iHub Anubhuti</p></div>
        <div className= " flex ">
            
            <div className='md:pb-12 md:mt-6 md:px-4 p-2 text-justify space-y-4'>
                <div className="text-md w-full  ">
                    
                <p className=" mb-12"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000"
                >
                    
                    As one of the twenty-five Technology Innovation Hubs (TiH) strategically placed across the country, the iHub Anubhuti-IIITD Foundation is at the forefront of shaping India's technological future in Cognitive Computing and Social Sensing (CC&SS).
                iHub Anubhuti at IIIT Delhi stands tall as a catalytic force propelling innovation in alignment with the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS), Department of Science and Technology, a testament to the visionary efforts of the Government of India.</p>
                
                </div>
                {/* <div className="text-md md:pl-40">
                <p className="">iHub Anubhuti is the National Center for Cognitive Computing & Social Sensing. iHub Anubhuti aims at building a collaboration between industries, academia and government agencies on developing data driven cognitive computing solutions, mainly in verticals - Health, Law Enforcement & Security, Education and Environmental Sustainability. It will also encourage and promote the entrepreneurial activities and start-ups emanating from the projects in the areas of “Machine Learning, Artificial Intelligence and Cognitive Computing & Social Sensing”.</p>
               
                </div> */}
                {/* <div className="text-md  ">
                <p className="">
                </p>
                </div> */}
                {/* <div className= "font-bold md:text-3xl md: py-10 text-2xl w-full text-center  md:text-left text-[#003688] " >
                    <p className='md:mx-0 mx-auto'>Roles of our Foundation</p>
                </div> */}
                <div className=' py-4 border-2 border-blue-200 md:pb-8  w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
                    <div className='cardtext22 text-center mb-4'>Roles of our Foundation</div>
                    {/* <div className=' py-10 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '> */}
                    {/* <div className='cardtext22 text-center mb-8'>Cognitive Computing and Social Science</div> */}
                    <div className='flex justify-evenly flex-col md:flex-row gap-4 md:p-0 p-4'>
                        
                
        
                <div className="bg-white hover:bg-blue-50 border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between " data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800">
                    <p className="cardtextt pt-8 px-6 text-center " >Incubation and Entrepreneurship</p>
                    <div className='md:pt-[50px]  px-6'><Image src={r1} width={227} height={217} alt="health"/></div>
                </div>

                <div className="bg-white hover:bg-blue-50  border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between" data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800">
                   
                    <p className="cardtextt  pt-8 px-6 text-center ">Research and Innovation Initiatives</p>
                    <div className='md:py-[20px]  px-6'><Image src={r2} width={227} height={217} alt="edu"/></div>
                    
                
                </div>
                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800" className="bg-white hover:bg-blue-50 border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
                   
                    <p className="cardtextt  pt-8 px-6 text-center">Skill Development Programs</p>
                    <div className='md:py-[55px]   px-6'><Image src={r3} width={227} height={217} alt="earth"/></div>
                    
               
                </div>
                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800" className="bg-white hover:bg-blue-50 border-2  border-blue-200 md:h-[330px] md:w-[220px] rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
                   
                    <p className="cardtextt pt-8 px-6 text-center ">Strategic Partnerships and Networking</p>
                    <div className='md:py-[16px]  px-6'><Image src={r4} width={227} height={217} alt="law"/></div>
                    
              
                </div>
                </div>

                {/* </div> */}
                    {/* <div className='rounded-xl border-2 px-8 py-6'>
                        <div className='text-center font-bold pb-4'>Role of the iHub Anubhuti-IIITD Foundation</div>
                        <div className='list-dics'>
                            • Incubation and Entrepreneurship<br></br>
                            • Research and Innovation Initiatives<br></br>
                            • Skill Development Programs<br></br>
                            • Strategic Partnerships and Networking<br></br>
                        </div>
                    </div> */}
                </div>
                

                
                 
            

            </div>    
        </div>
        </div>
    </>)
}
export default Mission