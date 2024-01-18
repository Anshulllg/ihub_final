import React from 'react';
import Image from 'next/image';
import s1 from "../../assets/c1.png";
import s2 from "../../assets/c2.webp";
import s3 from "../../assets/c3.png";
import s4 from "../../assets/c4.png";
import s5 from "../../assets/c5.webp";


const CpsPrayas = () => {
  const onClick = (event) => {
    console.log('Link clicked!');
  };

  return (
    <div className='p-24 space-y-10'>
      <div>
        <div className='text-5xl font-bold text-center text-blue-900'>CPS-PRAYAS</div>
        <div className='text-2xl font-medium text-center text-blue-900'>Enrolled Startups</div>
      </div>

      <div className='grid grid-cols-6 gap-10'>
        <div className=' p-4 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
            <a href="https://app.goodlives.in/" onClick={onClick}>
            <Image data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800"  src={s1}  alt="StartUp Image"/>
            </a>
        </div>
        
        <div className=' p-4 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
            <a href="https://www.rntinsights.com/" onClick={onClick}>
            {/* <img src="path/to/monitra-image.jpg" alt="Monitra Health Startup" /> */}
            <Image data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800"  src={s2}  alt="StartUp Image"/>
            </a>
        </div>

        <div className=' p-4 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
            <a href="https://medaaverse.com/" onClick={onClick}>
            {/* <img src="path/to/monitra-image.jpg" alt="Monitra Health Startup" /> */}
            <Image data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800"  src={s3}  alt="StartUp Image"/>
            </a>
        </div>

        <div className=' p-4 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
            <a href="https://eyecan.in/" onClick={onClick}>
            {/* <img src="path/to/monitra-image.jpg" alt="Monitra Health Startup" /> */}
            <Image data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800"  src={s4}  alt="StartUp Image"/>
            </a>
        </div>  

        <div className=' p-4 border-2 border-blue-200 h-full w-full rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 '>
            <a href="https://www.zeuron.ai/" onClick={onClick}>
            {/* <img src="path/to/monitra-image.jpg" alt="Monitra Health Startup" /> */}
            <Image data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800"  src={s5}  alt="StartUp Image"/>
            </a>
        </div>     
      </div>
    </div>
  );
};

export default CpsPrayas;
