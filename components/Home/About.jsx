import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image"
import img1 from "../../assets/img1.png";

const About = () => {
    const videoRef = useRef();
    const [video, setVideo] = useState(null);
  
    useEffect(() => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
  
        // Use the video element directly instead of creating a new one
        videoElement.src = 'https://drive.google.com/uc?export=download&id=1tJgxOYOl8TMMeuoFYIg9_CUY1eTskqaB';
        videoElement.muted = true; // Mute the video
        videoElement.autoplay = true; // Autoplay the video
        setVideo(videoElement);
      }
    }, []);
    return( <>
        <div className='mb-8'>
        <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] my-20" >
            <p className='md:mx-0 mx-auto'>About</p></div>
        <div className= "  flex md:flex-row text-center  md:text-left flex-col py-6 px-2 ">
            <div className='md:w-1/2'>
            {/* <div className='absolute z-10 h-[212px] w-[212px] rounded-full -my-16 -mx-16' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div>
                <div className= "heading z-10" >About</div> */}
                
                {/* <div className=' z-10 h-40 w-40 rounded-full -my-16 -mx-16' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
                    
                
                <p className="font-bold text-3xl md:text-5xl mt-8 ">iHub Anubhuti</p>
                <p className="logotextabout2">IIITD Foundation</p>
                <p className="text-xl md:font-semibold  my-12 md:my-20 italic" 
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">“Making India the technology leader in the area of Cognitive Computing and Social Sensing (CC&SS)“</p>
            </div>

            <div className='flex md:w-1/2'>
            <div className="z-10 w-full h-auto max-w-full rounded-xl md:p-24 p-2">
                <video ref={videoRef} className="w-full  rounded-lg" controls>
                    <source src="https://drive.google.com/uc?export=download&id=1tJgxOYOl8TMMeuoFYIg9_CUY1eTskqaB" type="video/mp4" />
                </video>
            </div>
                {/* <div className='py-20 px-[100px] absolute z-10'><Image src={img1} width={405} height={413} alt="img1"/></div> *
        <div className=" absolute z-0 py-8 ml-[290px] bg-[#AFC5FB] opacity-30 border-[1px] h-[322px] w-[320px] rounded-2xl "></div> */}
                <div className=" absolute z-0 py-8  bg-[#AFC5FB] opacity-30 border-[1px] md:h-44 md:w-96 rounded-2xl "></div>
                <div className=" absolute z-0 mt-[200px] ml-[200px] bg-[#AFC5FB] opacity-30 border-[1px] md:h-44 md:w-96 rounded-2xl "></div>
            </div>
            
        </div>
        </div>
    
    {/* <div className={`canvas ${canvasVisible ? 'open' : 'hidden'} z-100`} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>navbar code</div> */}

    </>)
}
export default About