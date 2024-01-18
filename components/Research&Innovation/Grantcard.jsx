import React, {useState, useEffect} from 'react';
import axios from "axios"
import Image from "next/image"
import sarika from "../../assets/sarika.png";
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"


const Grantcard = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [grants, setGrants] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/rgrants')
          .then(response => setGrants(response.data))
          .catch(error => console.error(error));
      }, []);
      console.log(grants)

    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        
       
        
            

    </>)
}
export default Grantcard