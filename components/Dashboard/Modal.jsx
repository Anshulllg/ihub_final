import React, {useState} from 'react';
import Image from "next/image"
import career from "../../assets/career.png";
import dropdown from "../../assets/dropdown.png";
import ihublogo from "../../assets/ihublogo.png"


const Fellowshipcard = () => {
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
        
        <div className= " my-[40px]">
           
            <div className="flex my-auto bg-white border-[1px] h-[180px] w-[1528px] rounded-3xl shadow-lg shadow-blue-500/30  z-10">
            <p className=" career -pt-[60px] pl-20"> Name </p>
            <p className="cardtext2 my-2 pl-20">Occupation</p> 
            <div className='  '><Image src={dropdown} width={98} height={98} alt="link"/></div>
            <div className=' '><Image src={dropdown} width={98} height={98} alt="link"/></div>

        </div>
            
        </div>
    </>)
}
export default Fellowshipcard