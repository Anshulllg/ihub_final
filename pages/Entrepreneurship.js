import Entrepreneurship from "../components/Entrepreneurship/Entrepreneurship";
import Schemecard from "../components/Entrepreneurship/Schemecard";


export default function Home() {
    return (
      
      <div className="main">
        <div className="main mx-[220px] ">

          <Entrepreneurship/>
          <Schemecard/>
          {/* <Schemes/> */}

        </div>
      </div>
    );
}
   
  