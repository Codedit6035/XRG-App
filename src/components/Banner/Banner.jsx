import React from 'react'
import Navbar from '../Navbar/Navbar'
import banner from "../../assets/services/banner.jpeg"
const Banner = () => {
  return (
    <div className=" relative h-screen w-full overflow-hidden">
      {/* Navbar Component */}
      <div className=" absolute top-0 left-0 w-full z-20  ">
        <Navbar titreColor={'white'}/> {/* This is your existing Navbar component */}
      </div>
      {/* background pattern */}
      <div        
        className="h-screen w-full bg-cover bg-center animate-zoom  bg-blue-950">
      </div>

      {/* Content Overlay */}
      <div className=" pl-20 absolute inset-0 flex items-center justify-between z-10 ">
        <div className="text-white max-w-lg">
          {/* Title */}
          <h1 className="text-6xl font-bold mb-4 IBMPlexSerif ">Better IT <br/> <span className='text-orange-600'>services</span> , for <br/> everyone</h1>
          
          {/* Blue line */}
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>

          {/* Short Paragraph */}
          <p className="text-lg">
            Our goal is to help you build better IT  services that propel your business forward.
            Learn more about the services we offer. 
          </p>
        </div>
        <div className='bg-black/50 w-[500px] '>
            <img src={banner} alt="" />            
        </div>
      </div>
    
    </div>
  )
}

export default Banner