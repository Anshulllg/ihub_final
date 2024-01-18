import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image"
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "../../assets/slide.png";
import Slide2 from "../../assets/slide2.png";
// import Slide2 from "../../assets/slide2.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const CarouselComponent = () => {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    axios.get('https://ihub-hbkk.onrender.com/home')
      .then(response => setHomes(response.data))
      .catch(error => console.error(error));
    }, []);
    console.log(homes)

  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full md:h-full"
      >
        {homes.map((home, index)=>{
          return(<>
          <SwiperSlide  className="w-full h-full"><div className=' 
          w-full md:h-[87vh]
          '> <img src={home.image}  alt="slide"/>
            </div></SwiperSlide>
          </>)
        })}
        
      </Swiper></>
  );
};

export default CarouselComponent;

// import React, { useRef, useState } from 'react';
// import Image from "next/image"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Slide from "../../assets/slide.png";
// import Slide2 from "../../assets/slide2.png";
// // import Slide2 from "../../assets/slide2.png";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// const CarouselComponent = () => {
  

//   return (
//     <>
//     <div></div>
//     <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         loop={true}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="w-full md:h-full h-fit"
//       >
        
//         <SwiperSlide  className="w-full h-full"><div className=' 
//           w-full md:h-[87vh]
//           '> <Image src={Slide}  alt="slide"/>
//             </div></SwiperSlide>
//         <SwiperSlide  className="w-full h-full"><div className='
//           w-full md:h-[87vh]
//           '><Image src={Slide2}  alt="slide"/>
//             </div></SwiperSlide>
//         <SwiperSlide  className="w-full h-full"><div className='
//           w-full md:h-[87vh]
//           '>
//             <Image src={Slide}  alt="slide"/>
//             </div></SwiperSlide>
//         <SwiperSlide  className="w-full h-full"><div className='
//           w-full md:h-[87vh]
//           '>
//             <Image src={Slide2}  alt="slide"/>
//             </div></SwiperSlide>
//       </Swiper></>
//   );
// };

// export default CarouselComponent;
