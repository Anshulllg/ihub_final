import React, { useEffect,useState } from "react";
import About from '../components/Home/About'
import Aboutinfo from '../components/Home/Aboutinfo'
import Mission from '../components/Home/Mission'
import Vision from "../components/Home/Vision";
import Focus from "../components/Home/Focus";
import News from "../components/Home/News";
import Founding from "../components/Home/Founding";
import LoadingScreen from "../components/LoadingScreen";
import CarouselComponent from "../components/Home/CarouselComponent";

export default function Home() {
  
  return (<>
    <div className="main">
    {/* <div className=" z-10"><Video/></div> */}
    <CarouselComponent/>
    <div className="main md:p-24 p-2">
      
      <About/>
      <Aboutinfo/>
      <Mission/>
      <Vision/>
      <Focus/>
      <News/>
      <Founding/>

    
      
    </div>
  </div>
  </>
    
  );
}
 
