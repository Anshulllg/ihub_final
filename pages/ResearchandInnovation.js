import Research from "../components/Research&Innovation/Research";
import React, { useState,useEffect } from "react";
import Fellowship from "../components/Fellowship/Fellowship";
import Entrepreneurship from "../components/Entrepreneurship/Entrepreneurship";
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("Research");
  useEffect(() => {
    AOS.init();
}, []);
  function handleClick(componentName) {
    setSelectedComponent(componentName);
  }

  return (
    <>
      <div className="md:p-24 p-8 overflow-x-hidden">
        <div className=" flex md:justify-between flex-col md:flex-row h-fit mt-12 mb-4 md:text-left text-center ">
          <div className="flex justify-start">
            

          <div className= "font-bold md:text-4xl text-3xl w-full text-center  md:text-left text-[#003688] " >
            <p className='md:mx-0 mx-auto' data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="000">Research and Innovation</p></div>
          </div>
          <div className=" md:my-auto  heading2  flex flex-col md:flex-row md:gap-12  " 
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="000">
                        <p
              onClick={() => {
                handleClick("Research");
              }}
            >
              <div>
                <div
                  className={`${
                    selectedComponent === "Research" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}
                >
                  Research
                </div>
                
              </div>
            </p>

            <p
              onClick={() => {
                handleClick("Entrepreneurship");
              }}
            >
              <div>
                <div
                  className={`${
                    selectedComponent === "Entrepreneurship" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}
                >
                  Entrepreneurship
                </div>
                
              </div>
            </p>

            <p
              onClick={() => {
                handleClick("Fellowship");
              }}
            >
              <div>
                <div
                  className={`${
                    selectedComponent === "Fellowship" ? "bg-blue-200 rounded-full px-1 py-[1px]" : ""
                  }`}
                >
                  Fellowship
                </div>
                
              </div>
            </p>
          </div>
        </div>
        <hr className="border-2  border-blue-200" />
        {selectedComponent === "Research" && <Research />}
        {selectedComponent === "Entrepreneurship" && <Entrepreneurship />}
        {selectedComponent === "Fellowship" && <Fellowship />}
      </div>
    </>
  );
}
