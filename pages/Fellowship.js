import Fellowship from "../components/Fellowship/Fellowship";
import Fellowshipcard from "../components/Fellowship/Fellowshipcard";


export default function Home() {
    return (
      
      <div className="main">
        <div className="main mx-[220px] ">

          <Fellowship/>
          <Fellowshipcard/>
          {/* <Schemes/> */}

        </div>
      </div>
    );
}
   
  