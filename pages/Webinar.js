import Webinar from "../components/Events/Webinar";
import Webinarnav from "../components/Events/Webinarnav";

import Tendercard from "../components/Tender/Tendercard";

export default function Home() {
  return (
    <div className="main">
      <div className="main mx-[220px]">
        <Webinarnav/>
        <Webinar/>
      </div>
    </div>
  );
}
