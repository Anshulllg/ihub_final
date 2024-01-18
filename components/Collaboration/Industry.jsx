import React, {useState} from 'react';
import Link from 'next/link';

const Industry = () => {
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
        
        {/* <div className= "   ">
            <div className=' flex '>
                <div className= "heading absolute mt-14 z-20" >Industry</div>
                <div className=' z-10 h-[212px] w-[212px] rounded-full  -mx-16' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div>
                <div  className='  ml-auto heading2  mt-[90px] flex space-x-[200px] '>
                    
                    <Link href="/Entrepreneurship"><div >
                        <div className= " absolute ml-4" >Academics</div>
                        <div className='  z-10 h-[60px] w-[60px] rounded-full -mt-[10px]  ' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div>
                    </div></Link>
   
                </div>
                
               
                
            </div>

            
        </div> */}
    </>)
}
export default Industry