import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image"
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"


const Tendercard = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/tendors')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
        }, []);
        console.log(events)
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>

<div className= " py-12 ">
<div className= "font-bold md:text-5xl text-4xl w-full text-center  md:text-left text-[#003688] " >
            <p className='md:mx-0 mx-auto' data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">Tender</p></div>
           
            {/* <div className=' z-10 h-32 w-32 rounded-full relative  top-8' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            <hr className='border-2 my-12 border-blue-200'/>

           
{events.map((e, index)=>{
    const deadlineDate = new Date(e.date);
    const today = new Date();
    const isFutureDeadline = deadlineDate > today;
    return(
    <a href={`${e.link}`} index={index} key={index} className="flex flex-col md:flex-row  bg-white border-[1px] my-4 p-4 rounded-2xl shadow-lg shadow-blue-500/30 justify-between  " data-aos="fade-down"
    data-aos-duration="1000"
    data-aos-delay="000">
    {/* <div className=''><Image src={career} width={200} height={140} alt="person"/></div> */}
    <div className=' md:py-2 '>

        <div className='flex md:space-x-4 md:px-8 '>
            <div className='md:pt-1 md:block hidden'><Image src={ihublogo} width={30} height={30} alt="link"/></div>
            <p className=" font-bold md:text-3xl text-xl md:pl-4">{e.name}</p>
        </div>
       
        <div>
            <div className="flex gap-5">
            <p className="cardtextapply  md:pl-24">Last date:{new Date(e.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</p>
            <div className='h-4 w-4 rounded-full' style={{backgroundColor: isFutureDeadline ? 'green' : 'grey'}}></div>
            </div>
            
            <div className="flex gap-2">
            <a href={`${e.doc_link}`} className="cardtext2 md:pt-[8px]  md:pl-24" >Tender Document</a>
            <a href={`${e.ted_doc_link}`} className="cardtext2 md:pt-[8px]  md:pl-24" >Addendum</a>
            </div>
            
        </div>
        
    </div>
    <div className='pr-10 pt-4 '><div ><Image src={apply} width={60} height={60} alt="link"/></div></div>
</a>)
})}
                

            
        </div>
    </>)
}
export default Tendercard