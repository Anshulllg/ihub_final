
import Peoplecard from "../components/People/Peoplecard";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      
     
        <div className="main md:p-24 p-4">

          <Peoplecard/>

        </div>
      
    );
}
   
  