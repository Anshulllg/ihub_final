import Newsletter from "../components/Events/Newsletter";
import Newsletternav from "../components/Events/Newsletternav";
import Tendercard from "../components/Tender/Tendercard";

export default function Home() {
  return (
    <div className="main">
      <div className="main mx-[220px]">
        <Newsletternav/>
        <Newsletter/>
      </div>
    </div>
  );
}
