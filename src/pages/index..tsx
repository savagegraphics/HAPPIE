'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Home from './Home'
import Media from './Media'
import Products from './Products'
import Spaces from './Spaces';
import LogIn from './LogIn'
import Showrooms from './Showrooms'
import Contact from './Contact';
import Company from './Company'
import Image from 'next/image';


type Props = {};

const Index = (props: Props) => {
  const [activeButton, setActiveButton] = useState('Animation');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
  };

  useEffect(() => {
    // This effect will run once when the component mounts
    // and set the activeButton to 'Home' initially.
    setActiveButton('Home');
  }, []);


  let contentToShow = null;

  switch (activeButton) {
    case 'Home':
      contentToShow = <Home/>; 
      break;
      case 'Spaces': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <Spaces />;
      break;
      case 'Products': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <Products />;
      break;
      case 'Showrooms': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <Showrooms />;
      break;
      case 'Company': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <Company />;
      break;
      case 'Media': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <Media />;
      break;
      case 'Contact': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <Contact />;
      break;
    case 'LogIn':
      // Replace this with the component/content for App Design
      contentToShow = <LogIn />;
      // onSearch={function (searchResults: MovieResult[]): void {
      // } }
      break;
    default:
      contentToShow = null;
  }

  return (
   
    <div className="bg-[#0F2B48]">
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-6 relative max-w-7xl w-full bg-transparent border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link className="flex-none text-xl font-semibold" href="#" aria-label="Brand">
            <Image src="/assets/Happie.png" alt="" width={80} height={80} />
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-transparent text-white shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            > <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${isOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}
          > <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
        <Link className={` ${activeButton === 'Home' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#" aria-current="page"  onClick={() => handleButtonClick('Home')}>Get Estimate</Link>
        <Link className={` ${activeButton === 'Spaces' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#"
         onClick={() => handleButtonClick('Spaces')} >Services</Link>
   <Link className={` ${activeButton === 'Products' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#"  onClick={() => handleButtonClick('Products')} >About Us</Link>
   <Link className={` ${activeButton === 'Showrooms' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#"  onClick={() => handleButtonClick('Showrooms')} >Blog</Link>
        <Link className={` ${activeButton === 'Company' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#"  onClick={() => handleButtonClick('Company')} >FAQs</Link>
   <Link className={` ${activeButton === 'Media' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#"  onClick={() => handleButtonClick('Media')} >API</Link>
   <Link className={` ${activeButton === 'Contact' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} md:py-6`} href="#" onClick={() => handleButtonClick('Contact')}  >Sign In</Link>

   <Link className={`flex ${activeButton === 'LogIn' 
           ? 'text-blue-600 text-base font-semibold font-Inter'
           : 'text-white text-base font-semibold font-Inter'} mb-4 lg:mb-0 md-mb-2 md:py-6`} href="#" onClick={() => handleButtonClick('LogIn')}  >   
                           <button type="button" className="px-4 py-3 font-semibold rounded-lg bg-[#38C9EC] text-white font-bold font-Inter">Get Started</button>
        </Link>
      </div>
    </div>
  </nav>
</header>
  {/* Display the dynamic content */}
    <div className="mt-8">
       {contentToShow}
      </div>
    </div>
  );
};

export default Index;
