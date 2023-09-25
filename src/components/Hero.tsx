import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0F2B48] h-screen overflow-hidden">
       <div className="relative w-full h-screen flex">
      <Image src="/assets/mapbg.png" alt="" width={880} height={517} className="absolute inset-0 mb-[24rem] lg:mb-0 lg:ml-[28rem]"/>
      <div className="container px-6 py-4 mx-auto z-[1]">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-white lg:text-5xl md:text-4xl text-3xl font-extrabold font-Inter">
              Send and Receive <br /> items from your {' '} <br />
                <span className="text-blue-500 ">doorstep </span>
              </h1>

              <p className="mt-4 text-white text-opacity-70 text-base font-bold font-Inter">
              Welcome to the Good life! Use Happie to send <br /> items to your 
              customers, friends, and family in <br /> Lagos, Abuja, London, Ghana and more.
              </p>

              <button type="button" className="px-8 py-3 font-semibold rounded-lg bg-[#38C9EC] mt-8 text-white font-bold font-Inter"> Start Shipping</button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src='/assets/maplink.png'
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
       </div>
    </header>
  );
}

export default Navbar;
