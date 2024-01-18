import React, {useState} from 'react';
import Image from "next/image"
import career from "../../assets/career.png";
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"
import Link from 'next/link';

const Dashboard = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    return( <>
        
        <div className= " my-[20px] space-y-10 ">
        <div className= "heading  mt-12  ">Dashboard</div>
        {/* <div className=' z-10 h-[212px] w-[212px] rounded-full  -mx-16' style={{ background: 'linear-gradient(228deg, rgba(55.25, 184.98, 255, 0.72) 0%, rgba(0, 93.24, 233.10, 0.81) 100%)'}} ></div> */}
            <div className='border-2 p-4 bg-white shadow-lg shadow-blue-500/30 rounded-xl'>
                
                <div className= "text-3xl font-medium text-center pb-8">People and News</div>
                <div className='grid grid-cols-3 gap-10'>
                {/*  flex space-x-10*/}
                <Link href="/auth/cms/UserPage" className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30  z-10">
                        {/* <Link href="/auth/cms/UserPage" className=" career my-auto ml-8 ">People</Link> */}
                        <p className=" career my-auto ml-8">People</p>
                   
                        </Link>
                    <Link href="/auth/cms/HomePage" className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30  z-10">
                    {/* <Link href="/auth/cms/UserPage" className=" career my-auto ml-8 ">People</Link> */}
                    <p className=" career my-auto ml-8">Banner</p>
                
                    </Link>
                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30  z-10">
                        <Link href="/auth/cms/NewsPage" className=" career my-auto ml-8 ">News</Link>
                        {/* <p className=" career my-auto ml-8">News</p> */}
                   
                    </div>
                </div>
            </div>
            {/* <hr className='border-2 border-slate-400 '></hr> */}

            <div className='border-2 p-4 bg-white shadow-lg shadow-blue-500/30 rounded-xl'>
                <div className= "text-3xl font-medium text-center pb-8 ">Research & Innovation </div>
                <div className='grid grid-cols-3 gap-10'>
                {/*  flex space-x-10*/}
                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30  z-10">
                        <Link href="/auth/cms/RgrantsPage" className=" career my-auto ml-8 ">Research & Innovation</Link>
                        {/* <p className=" career my-auto ml-8">Research & Innovation</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30  z-10">
                        <Link href="/auth/cms/StartupPage" className=" career my-auto ml-8 ">Research Grant Page</Link>
                        {/* <p className=" career my-auto ml-8">Research & Innovation</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/Entre" className=" career my-auto ml-8 ">Entrepreneurship</Link>
                        {/* <p className=" career my-auto ml-8  ">Entrepreneurship hub</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/Fellowship" className=" career my-auto ml-8 ">Fellowship</Link>
                        {/* <p className=" career my-auto ml-8 ">Fellowship</p> */}
                    </div>
                       
                </div>
            </div>

            <div className='border-2 p-4 bg-white shadow-lg shadow-blue-500/30 rounded-xl'>
                <div className= "text-3xl font-medium text-center pb-8">Events</div>
                <div className='grid grid-cols-3 gap-10'>
                {/*  flex space-x-10*/}
                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/MediaEventPage" className=" career my-auto ml-8 ">Media</Link>
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/WebinarPage" className=" career my-auto ml-8 ">Webinar</Link>
                        {/* <p className=" career my-auto ml-8 ">Webinar</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/WorkShopPage" className=" career my-auto ml-8 ">Workshop</Link>
                        {/* <p className=" career my-auto ml-8 ">Workshop</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/NewsLetterPage" className=" career my-auto ml-8 ">Newsletter</Link>
                        {/* <p className=" career my-auto ml-8 ">Newsletter</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/BlogsPage" className=" career my-auto ml-8 ">Blog</Link>
                        {/* <p className=" career my-auto ml-8 ">Blog</p> */}
                    </div>
             
                </div>
            </div>


            <div className='border-2 p-4 bg-white shadow-lg shadow-blue-500/30 rounded-xl'>
                <div className= "text-3xl font-medium text-center pb-8">Collaboration</div>
                <div className='grid grid-cols-3 gap-10'>
                {/*  flex space-x-10*/}
                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/CollabPage" className=" career my-auto ml-8 ">Industry</Link>
                        {/* <p className=" career my-auto ml-8 ">Industry</p> */}
                    </div>

                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/CollabPage" className=" career my-auto ml-8 ">Academics</Link>
                        {/* <p className=" career my-auto ml-8 ">Academics</p> */}
                    </div>
                </div>
            </div>

            <div className='border-2 p-4 bg-white shadow-lg shadow-blue-500/30 rounded-xl'>
                <div className= "text-3xl font-medium text-center pb-8">Career and Tender</div>
                <div className='grid grid-cols-3 gap-10'>
                {/*  flex space-x-10*/}
                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/CareerPage" className=" career my-auto ml-8 ">Career</Link>
                        {/* <p className=" career my-auto ml-8 ">Career</p> */}
                   
                    </div>
                    <div className="flex bg-white border-2 h-[100px]  rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 z-10">
                        <Link href="/auth/cms/TendorPage" className=" career my-auto ml-8 ">Tender</Link>
                        {/* <p className=" career my-auto ml-8 ">Tender</p> */}
                   
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Dashboard