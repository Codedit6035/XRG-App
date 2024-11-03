import React from "react";
import Image1 from "../../assets/hero/lamp.jpg";
import Image2 from "../../assets/hero/buildings.jpg";
import Image3 from "../../assets/hero/flou.jpg";
import Slider from "react-slick";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import default styles
const images = [
    Image1,
    Image2,
    Image3,
  ];

import Navbar from '../Navbar/Navbar'
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (



    <div className=" relative h-screen w-full">
      {/* Navbar Component */}
      <div className=" absolute top-0 left-0 w-full z-20  ">
        <Navbar titreColor={'white'}/> {/* This is your existing Navbar component */}
      </div>
      {/* background pattern */}
      <Fade duration={3000} transitionDuration={1000} infinite arrows={false} >
        {images.map((each, index) => (
          <div        
            key={index}
            className="h-screen w-full bg-cover bg-center animate-zoom "
            style={{ backgroundImage: `url(${each})` }}
          ></div>
        ))}
      </Fade>
      {/* Content Overlay */}
      <div className=" container absolute inset-0 flex items-center justify-start z-10 ">
        <div className="text-white max-w-lg">
          {/* Title */}
          <h1 className="text-5xl font-bold mb-4">XRG Consulting Company</h1>
          
          {/* Blue line */}
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>

          {/* Short Paragraph */}
          <p className="text-lg">
            We provide top-notch consulting services to help businesses achieve their
            goals. Our expertise spans various industries, delivering customized
            solutions for your success.
          </p>
        </div>
      </div>
            {/* Tailwind Custom Keyframe */}
            <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-zoom {
          animation: zoomIn 5s ease-in-out infinite;
        }
      `}</style>
    
    </div>


 
  );
};

export default Hero;