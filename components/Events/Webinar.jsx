import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from "next/image"
import career from "../../assets/career.png";
import apply from "../../assets/apply.png";
import webinar from "../../assets/webinar.png"


const Webinar = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [webinars, setwebinars] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/webinar')
          .then(response => setwebinars(response.data))
          .catch(error => console.error(error));
       
          
        }, []);
        console.log(webinars)
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        
        <div className= " my-12 ">
            
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {webinars.map((web, index) => {
                    const webinarDate = new Date(web.date);
                    const today = new Date();
                    const isFutureWebinar = webinarDate > today;
                    return(<>
                    <div className="flex flex-col  md:flex-row md:p-3 p-3 bg-white border-[1px]  rounded-2xl shadow-lg shadow-blue-500/30 z-10">
                    <div className='md:w-1/3  w-full'>
                        
                        <Image src={web.image} width={300} height={250} alt="link"/>
                        
                    </div>
                        
                    <div className='md:w-2/3 w-full space-y-3'>
                        
                        <p className=" cardtext1 pl-2  md:pl-8">{web.name}</p>
                        <p className="cardtext pl-2 md:pl-8">{web.occupation
}</p>
                        <p className="pl-2 cardtext md:pl-8 ">Title: {web.title}</p>
                        {/* <p className="pl-2   md:pl-8 w-4/5"></p> */}
                        <p className="cardtext  pl-2 md:pl-8">Date: {new Date(web.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</p>
                        {/* <p className='text-sm mt-[2px] text-white   px-2 py-1 bg-blue-500  rounded-xl w-fit md:ml-8 ml-2' ><a href={web.link}>Resgister Now</a></p> */}
                        <p className='text-sm mt-[2px] text-white px-2 py-1 rounded-xl w-fit md:ml-8 ml-2' style={{backgroundColor: isFutureWebinar ? 'green' : 'grey'}}>
                 <a href={web.link} style={{pointerEvents: isFutureWebinar ? 'auto' : 'none', opacity: isFutureWebinar ? 1 : 0.6}}>Register Now</a>
              </p> </div>
                </div>
                    </>)

                })}

                

            </div>
            
        </div>
    </>)
}
export default Webinar