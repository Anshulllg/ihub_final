import React, {useState,useEffect} from 'react';
import Image from "next/image"
import mou from "../../assets/mou.png";
import axios from 'axios';
import Link from 'next/link';
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"


const Mediacard = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/mev')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
        }, []);
        console.log(events)
    const handleButtonHover = () => {
        setCanvasVisible(true)
    }
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/mev')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
        }, []);
        console.log(events)
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        
        <div className= " my-12  ">
         
            <div className=''>
{events.map((event, index) => {
    return(<>
    <div className="bg-white border-[1px]  rounded-3xl shadow-lg shadow-blue-500/30 md:my-12 my-8">
                    
                    <p className=" font-semibold text-2xl p-2 text-center md:text-start md:p-4">{event.name}</p>
                    <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-3 md:p-16 p-4'>
                        <img src={event.image1} className="md:col-span-1 col-span-2" />
                        <img src={event.image2} className="md:col-span-1 col-span-2" />
                        <img src={event.image3} className="md:col-span-1 col-span-2" />
                        <img src={event.image4} className="md:col-span-1 col-span-2" />
                    </div>
                       
                    
                </div>
    </>)
})}
                

            </div>
            
        </div>
    </>)
}
export default Mediacard