import React, {useState,useEffect} from 'react';
import Image from "next/image"
import dropdown from "../../assets/dropdown.png";
import { CiCircleChevDown } from "react-icons/ci";
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import enterstart from "../../assets/enterstart.png"
import { IoMdMail } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Schemecard = () => {
    const [models, setModels] = useState([]);
    const [canvasVisible, setCanvasVisible] = useState(false);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/entre')
          .then(response => setModels(response.data))
          .catch(error => console.error(error));
      }, []);
      console.log(models)
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        {models.map((model, index)=>{
            return(<>
            <div className='my-4 w-fit h-fit shadow-lg shadow-blue-500/30 rounded-[20px]' data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000">
        <Accordion sx={{
            borderRadius:"20px !important",
            padding: "15px", 
            
        }}>
        <AccordionSummary
        sx={{
            borderRadius:"50px"}}
          expandIcon={(
            <>
            
              
            <CiCircleChevDown size={50}/>
            
          
          </>)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:"semibold", fontSize:"36px"}}>{model.name}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            borderRadius:"50px"}}>
          <Typography sx={{fontWeight:"bold"}}>
            Type
          </Typography>
          <Typography>
            {model.type}
          </Typography>
          <Typography sx={{fontWeight:"bold"}}>
            Duration
          </Typography>
          <Typography>
            {model.duration}
          </Typography>
          <Typography sx={{fontWeight:"bold"}}>
            Objective
          </Typography>
          <Typography>
            {model.about}
          </Typography>
          <Typography sx={{fontWeight:"bold", marginTop:"50px"}}>
            Eligiblity
          </Typography>
          <Typography>
            {model.eligibility}
          </Typography>
          
          <div className=' mt-4 p-2  text-blue-500 flex gap-5'>
            <div className='flex gap-2'>
            <a href={`${model.guidelines}`}><SiGoogledocs size={35}/> </a>
            <p className='mt-2'>Guidelines</p>
            </div>
           <div className='flex gap-2'>
           <a href='mailto:info@ihub-anubhuti-iiitd.org' className=''><IoMdMail size={35}/></a>
            <p className='mt-2'>Contact Us</p>
           </div>
            
          </div>
          <div className='py-4 px-2 flex gap-4'>
            <button className='px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-400'>Apply Now</button>
            <a href={`${model.slogo_link}`}>Startups</a>
            
          </div>
          <div className='mt-12'>
           <Image src={enterstart} width={500} height={80} alt="Entrepreneur"/>
          </div>
        </AccordionDetails>
      </Accordion>
      </div>
            </>)
        })}
       
            

    </>)
}
export default Schemecard