import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0F2B48] w-full lg:h-screen h-[38rem]">
       <div className="relative flex">
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
               <div>
      <div className="relative flex items-center justify-center w-full mt-6 lg:mt-0">
    <Image
      className="w-full h-full"
      src='/assets/mapbg.png'
      alt="Catalogue-pana.svg"
      height={300}
      width={400}
    />

    {/* Image to be positioned on top */}
    <Image
      className="absolute top-0 left-0 lg:w-[28rem] w-80 h-auto"
      src='/assets/maplink.png'
      alt="Overlay Image"
      height={200}
      width={200}
    />
  </div>
        </div>
          </div>
        </div>
      </div>
       </div>
    </header>
  );
}

export default Navbar;
