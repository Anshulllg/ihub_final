import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import career from "../../assets/career.png";
import apply from "../../assets/apply.png";
import ihublogo from "../../assets/ihublogo.png"
import Image  from 'next/image';
import axios from 'axios';
const Media = () => {
    const [canvasVisible, setCanvasVisible] = useState(false);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('https://ihub-hbkk.onrender.com/blogs')
        .then((res) => {
            setBlogs(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])   
console.log(blogs)
    const handleButtonHover = () => {
        setCanvasVisible(true)
        // console.log("hello")
    }
    const handleButtonLeave = () => {
        setCanvasVisible(false)
        // console.log("bye")
    }
    
    return( <>
        
        <div className= " my-[40px]  ">
            <div className=' space-y-10'>
{blogs.map((blog, index) => {
    return(<>
    <div className=" bg-white  rounded-2xl shadow-lg shadow-blue-500/30 justify-between z-10">
                    {/* <div className='my-[26px] ml-[26px] '><Image src={blog.image} width={328} height={173} alt="person"/></div>
                    <div className='my-[84px] -ml-[420px] '>
                        <div><Image src={ihublogo} width={50} height={48} alt="link"/></div>
                        <p className=" career -mt-[62px] pl-20">{blog.name}</p>
                        <p className="cardtext2 pl-20">{blog.date}</p>
                    </div>
                    <div className='py-[66px] pr-[66px]'><a href={`${blog.link}`}>
                    <Image src={apply} width={98} height={98} alt="link"/></a></div> */}
                


                <div className="flex gap-6 bg-white border-[1px]  rounded-2xl shadow-lg shadow-blue-500/30 md:p-4 p-1 z-10">
                    <div className='w-64 h-full '>
                        <Image className='rounded-xl' src={blog.image} width={328} height={173} alt="person"/>
                        </div>
                    <div className='my-auto'>
                        {/* <div><Image src={ihublogo} width={50} height={48} alt="link"/></div> */}
                        <p className=" career  ">{blog.name}</p>
                        <p className="cardtext2 ">{blog.date}</p>
                    </div>
                    <div className='ml-auto my-auto pr-4'><a href={`${blog.link}`}>
                    <Image src={apply} width={70} height={70} alt="link"/></a></div>
                </div>

                </div>
    </>)
})}
            
                
                
            </div>
            
        </div>
    </>)
}
export default Media
