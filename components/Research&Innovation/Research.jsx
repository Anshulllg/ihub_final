import React, {useState ,useEffect} from 'react';
import Image from "next/image"
import axios from 'axios';
import img2 from "../../assets/img2.png";
import research from "../../assets/research.png";

import apply from "../../assets/apply.png";
import { useRouter } from 'next/router'


const Research = () => {
    const router = useRouter();
    // const [selectedComponent, setSelectedComponent] = useState("all");
// console.log(data.slug)
    const [canvasVisible, setCanvasVisible] = useState(false);
    // const data = router.query;
    // console.log(data)
    const [selected, setSel] = useState("all")
    const [grants, setGrants] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/rgrants')
          .then(response => setGrants(response.data))
          .catch(error => console.error(error));

        
        

        console.log(selected)
        
      }, []);
      console.log(grants)

    return( <>
        
        <div className= " md:p-24">
           
            <div className='flex md:flex-row flex-col gap-40'>
                <div className= ' ' >
                    <p className="" data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">As our goal is to develop innovative solutions that have a real impact on the <br></br>world, we believe that technology has the potential to solve some of the most<br></br> pressing challenges that society is facing today. We are currently working on <br></br>more than 20 research projects that are using Cognitive computing and Social <br></br>Sensing technologies to improve healthcare delivery, make legal processes more<br></br> efficient, and enhance the quality of education.</p>
                    <p className="" data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">In order to carry out real time technical solutions, we provide necessary financial<br></br> support and business mentorship to the Principal investigators (PIs) who are <br></br>leading research projects in these domains. These onboarded projects get<br></br>Government and industry connections which acts as a platform for building<br></br>professional networks and be a part of the innovation ecosystem. These <br></br>researchers also get access to the state-of-the-art lab facilities of IIIT Delhi and <br></br> Medical Cobotics Centre (MCC) to validate their research findings.</p> 
                </div>

                <div className='  '>
                    <div className='p-12 absolute z-10' data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000"><Image src={research} width={300} height={300} alt="img1"/></div>
                    <div className=" relative z-0  bg-[#AFC5FB] opacity-30 border-[1px] h-64 w-64 rounded-2xl "></div>
                    <div className=" relative z-0 left-40 -top-28 bg-[#AFC5FB] opacity-30 border-[1px] h-64 w-64 rounded-2xl "></div>
                </div>  
            </div>
        </div>

        <div className= "  p-8 ">
            
                <div className= "font-bold md:text-4xl text-3xl w-full text-center  text-[#003688] mb-8" >Sanctioned Research Grant</div>
                {/* <div className='  h-36 w-36 rounded-full relative  mx-auto bottom-28' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            

                <select className='md:hidden' onChange={e => setSel(e.target.value)}>
   <option value="all">All</option>
   <option value="Healthcare">Healthcare</option>
   <option value="Legal">Legal & Information Processing System</option>
   <option value="Cognitive">Cognitive Computing & Social Sensing</option>
   <option value="others">Others</option>
</select>

<div className='flex justify-evenly font-semibold text-[#003688] mt-4 mb-12'>

    <p className={`${
                    selected === "all" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`} onClick={e=> setSel("all")}>All</p> 
    <p className={`${
                    selected === "Healthcare" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`} onClick={e=> setSel("Healthcare")}>Healthcare</p>
    <p className={`${
                    selected === "Legal" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`} onClick={e=> setSel("Legal")}>Legal & Information Processing System</p>
    <p className={`${
                    selected === "Cognitive" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`} onClick={e=> setSel("Cognitive")}>Cognitive Computing & Social Sensing</p>
    <p className={`${
                    selected === "others" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`} onClick={e=> setSel("others")}>Others</p>
</div>
            <hr className='border-2 border-blue-200'/>
                   
        </div>
        <div className=' py-10 space-y-4'>
            
            {grants.filter(grant => selected === 'all' || grant.field === selected).map((grant, index) => {
   return (
       <a key={index} href={`startupPage/${grant._id}`} data-aos="fade-down"
       data-aos-duration="1000"
       data-aos-delay="000" className="flex md:flex-row flex-col md:text-left text-center bg-white border-[1px] md:p-6 p-2 rounded-2xl shadow-lg shadow-blue-500/30  gap-2">
           <div className='md:w-1/5'><Image src={grant.image} width={180} height={180} alt="person" className="rounded-full"/></div>
           <div className='md:pl-10 p-6 md:w-3/5'>
               <p className=" font-bold md:text-2xl pb-2 ">{grant.title}</p>
               <p className="cardtext2 ">{grant.name}</p>
               <p className="cardtextapply ">{grant.occupation}</p>
           </div>
           <div className='md:w-1/5 flex'>
            <div  className='md:p-0 p-16 mx-auto my-auto'>
            <Image src={apply} width={80} height={80} alt="link"/>
            </div>
            
            </div>
       </a>
   )
})}

            
            

            

        </div>
    </>)
}
export default Research