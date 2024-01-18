import React from 'react';
import Image from 'next/image';
import pi from "../../assets/pi.png";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';

const StartupPage = () => {
  const router = useRouter()
  const [startups, setStartups] = useState({});
  const id = router.query.slug;
  useEffect(() => {
    console.log(id);
    axios.get('https://ihub-hbkk.onrender.com/startup/search', {
 params: {
   id: id,
 }
})
.then(response => setStartups(response.data[0]))
.catch(error => console.error(error));


    //  console.log(startups);
    }, []);
    console.log(startups.user_image);
    
  return (
    
    <div className='p-8 '>
        <div className='text-center'>
          <h className='font-bold text-5xl ' >{startups.title}</h>
        <div className='flex justify-center my-6'>
          <img src={startups.user_image} width={35} height={10} className='rounded-full' alt="person"/>
          <h1 className='font-medium text-xl pt-1'> {startups.name}</h1>
        </div>
        <div className='flex justify-evenly pt-3'>
          
          {startups?.collaborators?.map((collaborator) => (<div><h1 className='font-medium text-md '>{collaborator}</h1></div>))}
        
        

        </div>
        </div>
        <hr className='border-2 my-6 border-blue-200'/>
    <div className='flex gap-8'>
      <div className='w-3/5 '>

        
        
        <div className='px-4 pb-8'>
          <h2 className='font-semibold text-xl pb-2'>Abstract/Project Details</h2>
          <p className='text-justify'> {startups.abstract}</p>
        </div>

        <div className=' bg-blueGray-200 h-[100px] rounded-full '>
          <div className=' py-6 font-bold text-4xl text-center ' >Technological Readiness Level :{startups.trl}</div>
        </div>

        <div className='px-4 pt-8'>
        <h2 className='font-semibold text-xl'>Area of Research</h2>
        <p className='text-justify'>{startups.area}</p>
    </div>
    <div className='px-4 pt-8'>
      <h2 className='font-semibold text-xl pb-4'>Contact</h2>

      <p>
        Address: {startups.address}
        <br />
        Email: {startups.email}
        <br />
        Website: {startups.website}
        <br />
        Contact No: {startups.phone}
      </p>
    </div>
        
      </div>
      <div className='w-2/5  '>
        <div className='bg-blueGray-600 h-[380px]'>
          <img src={startups.image} className='h-[380px] w-full object-cover' alt="startup"/>
        </div>
        <div className='px-4  pt-8 '>
      <h2 className='font-semibold text-xl'>Publications and Citations</h2>
      {startups?.citations?.map((publication) => (<div>
        <h3 className='font-medium text-md pt-2'>{publication.title}</h3>
        <p>Citation: {publication.authors[0]}</p>
      </div>) )}
      
      

      
    </div>


      </div>
      

    </div>

   

    {/* <div className='px-4  pt-8 '>
      <h2 className='font-semibold text-xl'>Publications and Citations</h2>
      
      <div>
        <h3 className='font-medium text-md pt-2'><a href='publication_link_1'>Title of Publication 1</a></h3>
        <p>Citation: Author A, Author B, et al. (Year). Journal Name, Volume(Issue), Page Range.</p>
      </div>

      <div>
        <h3 className='font-medium text-md pt-2'><a href='publication_link_2'>Title of Publication 2</a></h3>
        <p>Citation: Author C, Author D, et al. (Year). Journal Name, Volume(Issue), Page Range.</p>
      </div>

      <div>
        <h3 className='font-medium text-md pt-2'><a href='publication_link_3'>Title of Publication 3</a></h3>
        <p>Citation: Author E, Author F, et al. (Year). Journal Name, Volume(Issue), Page Range.</p>
      </div>

      <div>
        <h3 className='font-medium text-md pt-2'><a href='publication_link_4'>Title of Publication 4</a></h3>
        <p>Citation: Author G, Author H, et al. (Year). Journal Name, Volume(Issue), Page Range.</p>
      </div>

      <div>
        <h3 className='font-medium text-md pt-2'><a href='publication_link_5'>Title of Publication 5</a></h3>
        <p>Citation: Author I, Author J, et al. (Year). Journal Name, Volume(Issue), Page Range.</p>
      </div>

      <div>
        <h3 className='font-medium text-md pt-2'><a href='publication_link_6'>Title of Publication 6</a></h3>
        <p>Citation: Author K, Author L, et al. (Year). Journal Name, Volume(Issue), Page Range.</p>
      </div>
    </div>

    <div className='px-4 pt-8'>
      <h2 className='font-semibold text-xl pb-4'>Contact</h2>

      <p>
        Address: 123 Main Street, Cityville, State, 12345
        <br />
        Email: example@email.com
        <br />
        Website: www.example.com
        <br />
        Contact No: +1 (123) 456-7890
      </p>
    </div> */}

    

   


    </div>
  );
};

export default StartupPage;