import Careercard from "../components/Career/Careercard";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      
      <div className="main">
        <div className="main md:p-24 p-2 ">

          <Careercard/>

        </div>
      </div>
    );
}
   
  