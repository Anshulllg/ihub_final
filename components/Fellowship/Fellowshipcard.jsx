import React, {useState, useEffect} from 'react';
import Image from "next/image"
import career from "../../assets/career.png";
import dropdown from "../../assets/dropdown.png";
import ihublogo from "../../assets/ihublogo.png"
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CiCircleChevDown } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";

const Fellowshipcard = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [fellow, setFellows] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/fell')
          .then(response => setFellows(response.data))
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
        
        <div className= "  ">
           
        {fellow.map((model, index)=>{
            return(<>
            <div className='my-4 w-fit h-fit shadow-lg shadow-blue-500/30 rounded-[20px]'>
        <Accordion sx={{
            borderRadius:"20px !important",
            padding: "25px", 
            
        }}>
        <AccordionSummary
        sx={{
            borderRadius:"50px"}}
          expandIcon={<CiCircleChevDown size={50}/>}
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
          <div className=' mt-4 p-2  text-blue-500'>
            <a href={`${model.guidelines}`}><SiGoogledocs size={35}/></a>
          </div>
          <div className='py-4 px-2 flex gap-4'>
            <button className='px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-400'>Apply Now</button>
            <a href='mailto:info@ihub-anubhuti-iiitd.org' className='text-gray-400'><IoMdMail size={35}/></a>
          </div>

        </AccordionDetails>
      </Accordion>
      </div>
            </>)
        })}

        
            
        </div>
    </>)
}
export default Fellowshipcard