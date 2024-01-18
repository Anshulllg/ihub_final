import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image"
import career from "../../assets/career.png";
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"
import Link from "next/link";


const Careercard = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [careers, setCareers] = useState([]);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/career')
          .then(response => setCareers(response.data))
          .catch(error => console.error(error));
       
          
        }, []);
        console.log(careers)
    return( <>
        
        <div className= " my-12  ">
            <div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] " data-aos="fade-left"
       data-aos-duration="1000"
       data-aos-delay="000" >Career</div>
           
            {/* <div className=' z-10 h-32 w-32 rounded-full relative  top-8' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            <hr className='border-2 my-12 border-blue-200'/>

            <div className='space-y-10 content-center'>
            {careers.map((c, index) => {
                const deadlineDate = new Date(c.deadline);
                const today = new Date();
                const isFutureDeadline = deadlineDate > today;
    return (
        <a href={c.link} data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="000" key={index} index={index} className="flex  bg-white border-[1px] p-4 rounded-2xl shadow-lg shadow-blue-500/30 justify-between">
            <div className='flex flex-col justify-start'>
                <div className=" flex gap-4">
                    <div className='pt-1'><Image src={ihublogo} width={30} height={30} alt="link" /></div>
                    <p className="career">{c.name}</p>
                </div>

                <p className="cardtext3  pl-12 ">{c.location}</p>
                <div className="flex gap-5">
                <p className='cardtextapply pl-12 py-1'>Apply by {new Date(c.deadline).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</p>
         <div className='h-4 w-4 rounded-full' style={{backgroundColor: isFutureDeadline ? 'green' : 'grey'}}></div>
                </div>
                
                <div className="space-x-4 pl-12 cardtext2">
                    <a href={c.description} className="cardtext2">Job Description</a>
                    <a href={c.Aclink} className="cardtext2">Addendum</a>
                </div>
            </div>

            <div className=''>
                
            </div>

            <div className="flex justify-end items-center pr-10">
                <div  className='px-8'><Image src={apply} width={80} height={80} alt="link" /></div>
            </div>
        </a>
    );
})}

                

            </div>
            
        </div>
    </>)
}
export default Careercard