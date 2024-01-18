// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// const Workshop = () => {
//     const [canvasVisible, setCanvasVisible] = useState(false);
//     const [events, setEvents] = useState([]);
//     const handleButtonHover = () => {
//         setCanvasVisible(true)
//         // console.log("hello")
//     }
//     const handleButtonLeave = () => {
//         setCanvasVisible(false)
//         // console.log("bye")
//     }
//     useEffect(() => {
//         axios.get('https://ihub-hbkk.onrender.com/workshop')
//         .then(response => setEvents(response.data))
//         .catch(error => console.error(error));
//         }, []);
//     return( <>
        
//        <div className='p-16'> 

//         <div className='space-y-5'>
//             {events.map((e, index)=>{
//                 return(<>
//                 <div className='flex gap-8 p-4 border-1 rounded-2xl shadow-lg shadow-blue-500/30'>
//                 <div className='w-9/12 h-[250px] bg-slate-500 rounded-xl'></div>
//                 <div className=' w-4/5 text-xl font-bold mb-16'>{e.name}</div>

//             </div>
//                 </>)
//             })}
            
            
//         </div>
//        </div>
//     </>)
// }
// export default Workshop

import React, {useState, useEffect} from 'react';
import Image from "next/image"
import axios from 'axios';
import workshop from "../../assets/workshop.png";
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"


const Workshop = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/workshop')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
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
        
        <div className= " my-12  ">
         
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>

            {events.map((web, index) => {
                    return(<>
                    <div className="flex flex-col md:flex-row bg-white border-[1px]  rounded-2xl shadow-lg shadow-blue-500/30 justify-between z-10">
                    <div className='md:w-1/3 p-2 w-full flex justify-center '>
                        
                        <Image src={web.image} width={232} height={250} alt="link"/>
                        
                    </div>
                        
                    <div className='md:w-2/3 space-y-1'>
                        
             
                        <p className="cardtext4 pl-8">Title:</p>
                        <p className="  pl-8 w-3/4 cardtext1">{web.title}</p>
                        <p className="cardtext4 pt-2 pl-8">Date: {new Date(web.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</p>
                        <p className='text-sm mt-[2px] text-white   px-2 py-1 bg-blue-500  rounded-xl w-fit md:ml-8 ml-2' ><a href={web.link}>Resgister Now</a></p>
                    </div>
                </div>
                    </>)

                })}

            </div>
            
        </div>
    </>)
}
export default Workshop