import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import profilePic from "../assets/profile-pic.jpg"

const MainSection = () => {
  const titles = ["Web Developer", "Coding Geek", "Student"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // index in titles array
  const [charIndex, setCharIndex] = useState(0); // character index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = titles[index];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, titles]);


  return (
    <div id='intro' className='bg-[#1F242D] md:px-20 lg:px-40 pb-12 px-4 min-h-[80vh] text-white w-full'>
      <div className='w-full flex flex-col gap-y-25 md:flex-row md:max-w-screen'>
        <div className='lg:w-[70%]'>
          <h3 className='text-2xl md:text-3xl pt-4 md:pt-8 lg:pt-30 font-[700]'>Hello, This is</h3>
        <h1 className='text-4xl animate-pulse lg:text-5xl pt-1 lg:pt-3 font-[700]'>Gaurav Kumar Singh</h1>
        <h3 className='text-2xl lg:text-3xl pt-1 lg:pt-4 font-[700]'>And I'm a <span className='text-[#00EBFD] font-[700]'>{text}</span></h3>
        <p className='text-sm pt-4 lg:w-[80%] lg:pt-6 lg:leading-7 lg:text-[1.1rem] leading-[1.35rem] font-[500]'>Pre-final year B.Tech student at BIT Mesra with a passion for tech, creativity, and building cool things that solve real problems.</p>

      <div className="flex gap-4 md:pt-2 lg:pt-5 relative w-full mt-4 text-[#00EBFD] text-2xl">
      <a className='md:text-3xl hover:text-white' href="https://www.linkedin.com/in/gaurav-kumar-singh-a57596348/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a className='md:text-3xl hover:text-white' href="https://leetcode.com/u/GauravKrSingh40/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </a>
      <a className='md:text-3xl hover:text-white' href="https://github.com/gauravkrsingh321" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href='./Resume.pdf' download className="text-[#323946] font-extrabold md:top-16 absolute top-10 lg:top-20 left-[-4px] bg-[#00EBFD] hover:bg-blue-800 focus:outline-none hover:text-white focus:ring-4 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  ">Download Resume</a>
      </div>
        </div>

        <div className='w-[250px] rounded-[24px] 
        md:min-h-[380px] md:min-w-[300px] lg:min-h-[420px] lg:min-w-[340px] md:p-8 lg:mt-24 overflow-hidden h-[280px]'>
        <img loading='lazy'  src={profilePic} className='h-full w-full object-cover object-center md:rounded-[24px] ' alt="" />
        </div>
      </div>

      {/* About Section */}
        <div id='about' className='py-12 mt-8 md:mt-18 lg:mt-12'>
           <h3 className='text-3xl font-bold pb-1 lg:text-[2.5rem]'>About <span className='text-[#00EBFD] text-3xl font-bold lg:text-[2.5rem]'>Me</span></h3>
           <p className='text-2xl font-bold lg:text-[1.6rem]'>Tech Enthusiast</p>
           <p className='text-sm  lg:text-[1.1rem] opacity-[0.9] pt-6 mb-6 lg:mb-8'>I'm a Pre-final year Btech Chemical Engineering student at BIT Mesra with a strong passion for technology. I actively explore Data Structures & Algorithms and Web Development, and love building efficient, user-friendly web applications user-focused applications and solving coding challenges that sharpen my logical thinking. Whether it’s learning new frameworks, contributing to projects, or exploring the intersection of tech and real-world problems, I’m always up for a challenge and hungry to grow as a developer.</p>
           <a href='#intro' className="text-[#323946] lg:px-7  lg:tracking-[0.08rem] md:top-16 bg-[#00EBFD] hover:bg-blue-800 focus:outline-none focus:ring-4 font-extrabold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</a>
        </div>
  </div>
  )
}

export default MainSection