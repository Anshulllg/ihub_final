import Mediacard from "../components/Events/Mediacard";
import Media from "../components/Events/Media";

export default function Home() {
  return (
    <div className="main">
      <div className="main mx-[220px]">
        <Media/>
        <Mediacard/>
      </div>
    </div>
  );
}
