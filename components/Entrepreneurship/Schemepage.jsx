import React, {useState,useEffect} from 'react';
import Image from "next/image"
import dropdown from "../../assets/dropdown.png";
import { CiCircleChevDown } from "react-icons/ci";
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Schemepage = () => {
    const [models, setModels] = useState([]);
    const [canvasVisible, setCanvasVisible] = useState(false);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/entre')
          .then(response => setModels(response.data))
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
      dcvsd
            

    </>)
}
export default Schemepage