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
      <nav className="mt-6 relative max-w-7xl w-full bg-transparent rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link className="flex-none text-xl font-semibold" href="#" aria-label="Brand">
            <Image src="/assets/Happie.png" alt="" width={80} height={80} />
          </Link>
          <div className="md:hidden">
<<<<<<< HEAD
          <button
=======
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-transparent text-white shadow-sm align-middle transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
>>>>>>> b5cbbf97e1fbfd2873eb057d9342abbe5effdcc6
              onClick={toggleMenu}
              type="button"
              className='text-white hover:text-gray-400'
			  aria-label="toggle menu"
            >
              {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
          </svg>
          
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
              
              )}
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
