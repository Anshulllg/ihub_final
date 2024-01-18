import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Image from "next/image"
import career from "../../assets/career.png";
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"


const Newsletter = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [events, setEvents] = useState([]);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/newslet')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
        }, []);
        console.log(events)
    return( <>
        
        <div className= " my-12  ">
            <div className=' space-y-10'>
                {events.map((e, index)=>{
                    return(<>
                    <div className="flex gap-6 bg-white border-[1px]  rounded-2xl shadow-lg shadow-blue-500/30 md:p-4 p-1 z-10">
                    <div className='w-64 h-full '>
                        <Image className='rounded-xl' src={e.image} width={50} height={50} alt="person"/>
                        </div>
                    <div className='my-auto '>
                        {/* <div><Image src={ihublogo} width={50} height={48} alt="link"/></div> */}
                        <p className=" career  ">{e.name}</p>
                        <p className="cardtext2 ">{e.month}</p>
                    </div>
                    <div className='ml-auto my-auto pr-4'><a href={`${e.link}`}>
                    <Image src={apply} width={70} height={70} alt="link"/></a></div>
                </div>
                    </>)
                })}

            
                
                
            </div>
            
        </div>
    </>)
}
export default Newsletter