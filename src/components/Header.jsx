import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className='bg-[#1C2028]  md:h-[12vh] h-[10vh] flex md:justify-between items-center px-4 md:px-20 lg:px-40 justify-between z-10 relative'>
        <a href='#' className='text-white hover:text-[#00EBFD] text-[1.2rem] md:text-2xl font-medium'>Gaurav's</a>

        {/* Desktop Nav */}
        <div className='text-white scroll-auto lg:text-[1.35rem] text-[1.1rem] hidden md:flex gap-x-12'>
          <a className='hover:text-[#00EBFD]' href="#">Home</a>
          <a className='hover:text-[#00EBFD]' href="#about">About</a>
          <a className='hover:text-[#00EBFD]' href="#projects">Projects</a>
          <a className='hover:text-[#00EBFD]' href="#contact">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div className="text-white text-[1.35rem] md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className='bg-[#1F242D] md:hidden w-full fixed top-[10vh] left-0 h-full text-white text-[1.1rem] flex flex-col px-4 gap-y-6 pt-6 z-10'>
          <a className='hover:text-[#00EBFD]' href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a className='hover:text-[#00EBFD]' href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className='hover:text-[#00EBFD]' href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className='hover:text-[#00EBFD]' href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
