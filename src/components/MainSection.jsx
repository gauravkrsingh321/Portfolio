import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
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
          <h3 className='text-2xl md:text-3xl pt-4 md:pt-8 lg:pt-30 font-[700]'>Hello, It's Me</h3>
        <h1 className='text-4xl animate-pulse lg:text-5xl pt-1 lg:pt-3 font-[700]'>Gaurav Kumar Singh</h1>
        <h3 className='text-2xl lg:text-3xl pt-1 lg:pt-4 font-[700]'>And I'm a <span className='text-[#00EBFD] font-[700]'>{text}</span></h3>
        <p className='text-sm pt-4 lg:w-[80%] lg:pt-6 lg:leading-7 lg:text-[1.1rem] leading-[1.35rem] font-[500]'>You are currently reading a paragraph written by a Pre-Final Year Student at BIT Mesra who is a Tech Enthusiast with a pinch of ambivertness, a teaspoon of childishness and a handful of adventurness in his life!! </p>

      <div className="flex gap-4 md:pt-2 lg:pt-5 relative w-full mt-4 text-[#00EBFD] text-2xl">
      <a className='md:text-3xl' href="https://www.linkedin.com/in/gaurav-kumar-singh-a57596348/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a className='md:text-3xl' href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a className='md:text-3xl' href="https://github.com/gauravkrsingh321" target="_blank" rel="noopener noreferrer">
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
           <p className='text-sm  lg:text-[1.1rem] opacity-[0.9] pt-6 mb-6 lg:mb-8'>When faced with the choice between CSE at BIT Mesra and non-circuital branches at IIT, I thought, "Why swim in the ocean of possibilities when I can surf the waves of coding greatness at BIT?" This is the level of Tech Madness I have inside me. Coding is my jam, and who knows, maybe I'll code Google's way to Mars someday! Bring on the nerdy algorithms and let's conquer the tech world, one line of code at a time!🚀</p>
           <a href='#intro' className="text-[#323946] lg:px-7  lg:tracking-[0.08rem] md:top-16 bg-[#00EBFD] hover:bg-blue-800 focus:outline-none focus:ring-4 font-extrabold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</a>
        </div>
  </div>
  )
}

export default MainSection