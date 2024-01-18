import { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
const LinkNav = () => {
  const [selectedOption, setSelectedOption] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   };
   
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <div className=' hidden md:block'>
    <div className=" flex w-[60vw] absolute px-4 left-0 right-0 mx-auto bg-white shadow-lg shadow-blue-300/25 justify-between rounded-full p-22 py-4 my-2 z-50">
        <Link href="/">
          <div
            onClick={() => handleOptionClick('Home')}
            className={`navtext px-2 ${selectedOption === 'Home' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Home
          </div>
        </Link>
        <Link href="/ResearchandInnovation">
          <div
            onClick={() => handleOptionClick('Research & Innovation')}
            className={`navtext px-2 ${selectedOption === 'Research & Innovation' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Research & Innovation
          </div>
        </Link>
        <Link href="/Events">
          <div
            onClick={() => handleOptionClick('Events')}
            className={`navtext px-2 ${selectedOption === 'Events' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Events
          </div>
        </Link>
        <Link href="/Collaboration">
          <div
            onClick={() => handleOptionClick('Collaboration')}
            className={`navtext px-2 ${selectedOption === 'Collaboration' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Collaboration
          </div>
        </Link>
        <Link href="/People">
          <div
            onClick={() => handleOptionClick('People')}
            className={`navtext px-2 ${selectedOption === 'People' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            People
          </div>
        </Link>
        <Link href="/Career">
          <div
            onClick={() => handleOptionClick('Careers')}
            className={`navtext px-2 ${selectedOption === 'Career' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Career
          </div>
        </Link>
        <Link href="/Tender">
          <div
            onClick={() => handleOptionClick('Tenders')}
            className={`navtext px-2 ${selectedOption === 'Tender' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Tender
          </div>
        </Link>
      </div>
    </div>
    <button onClick={toggleMenu} className='absolute z-50 right-0 m-4 top-4 p-2 rounded-md md:hidden'>
 {isOpen ? <MdOutlineClose/> : <MdMenu/>}
</button>

    <div id='nav2' className={`bg-white rounded-xl md:p-12 p-2 w-4/5 absolute z-50 right-0 ${isOpen? 'block': 'hidden'}`}>
    <Link href="/">
          <div
            onClick={() => handleOptionClick('Home')}
            className={`navtext px-2 ${selectedOption === 'Home' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Home
          </div>
        </Link>
        <Link href="/ResearchandInnovation">
          <div
            onClick={() => handleOptionClick('Research & Innovation')}
            className={`navtext px-2 ${selectedOption === 'Research & Innovation' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Research & Innovation
          </div>
        </Link>
        <Link href="/Events">
          <div
            onClick={() => handleOptionClick('Events')}
            className={`navtext px-2 ${selectedOption === 'Events' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Events
          </div>
        </Link>
        <Link href="/Collaboration">
          <div
            onClick={() => handleOptionClick('Collaboration')}
            className={`navtext px-2 ${selectedOption === 'Collaboration' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Collaboration
          </div>
        </Link>
        <Link href="/People">
          <div
            onClick={() => handleOptionClick('People')}
            className={`navtext px-2 ${selectedOption === 'People' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            People
          </div>
        </Link>
        <Link href="/Career">
          <div
            onClick={() => handleOptionClick('Career')}
            className={`navtext px-2 ${selectedOption === 'Career' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Career
          </div>
        </Link>
        <Link href="/Tender">
          <div
            onClick={() => handleOptionClick('Tender')}
            className={`navtext px-2 ${selectedOption === 'Tender' ? 'bg-blue-200 rounded-full' : 'hover:bg-blue-100 hover:rounded-full'}`}
          >
            Tender
          </div>
        </Link>
    </div>
    
      
    </>
  );
};

export default LinkNav;