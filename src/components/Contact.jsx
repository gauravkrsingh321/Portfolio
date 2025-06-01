import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#1F242D] min-h-80vh py-4'>
      <h3 className='text-white text-center pt-10 text-[2.1rem] font-bold'>Contact <span className='text-[#00EBFD]'>Me!</span></h3>
      <div className='flex flex-col  gap-y-3 px-4 lg:px-42 pb-12 '>
        <input className='bg-[#323946] mt-6  lg:p-4 min-w-[320px] text-white  placeholder:text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] focus:outline-none lg:placeholder:text-[1.1rem] p-2 pl-3 rounded-md' type="text" placeholder='Full Name'/>
      <input className='bg-[#323946] text-white lg:p-4 lg:placeholder:text-[1.1rem] pl-3 mt-2 min-w-[320px]  placeholder:text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] p-2 focus:outline-none rounded-md' type="text" placeholder='Email Address'/>
      <input className='bg-[#323946] text-white lg:p-4 mt-2 lg:placeholder:text-[1.1rem] pl-3 min-w-[320px]  placeholder:text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] p-2 focus:outline-none rounded-md' type="text" placeholder='Contact Number'/>
      <input className='bg-[#323946] mt-2 lg:p-4 pl-3 lg:placeholder:text-[1.1rem] min-w-[320px]  placeholder:text-white text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] focus:outline-none p-2 rounded-md' type="text" placeholder='Email subject'/>
      <textarea className='bg-[#323946] text-white min-h-[32vh] mt-2 lg:p-4 pl-3 lg:placeholder:text-[1.1rem] min-w-[320px]  placeholder:text-white focus:outline-none placeholder:opacity-[0.3] placeholder:text-[0.9rem] p-2 rounded-md' placeholder='Your Message'></textarea>
      <button className="text-[#1a54c0] ml-[80px] w-[50%] lg:w-[20%] lg:py-2 lg:ml-[480px] mt-6 lg:tracking-[0.08rem] md:top-16 bg-cyan-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-4 font-extrabold rounded-full text-md px-2 py-2 lg:text-[1.1rem] text-center ">Submit</button>
      </div>
    </div>
  )
}

export default Contact