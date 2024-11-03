import React from "react";
import Img1 from "../../assets/services/advising.jpg"
import Img2 from "../../assets/services/talking.jpg"
import Img3 from "../../assets/services/teaching.jpg"

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Advising",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Talking",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Teaching",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },

];

const Services = () => {
  return (
    <div className="pt-14 pb-12 sm:h-screen  bg-white ">
      <div className="">
        {/* Header section */}
        <div className="mb-10 bg-sky-800  animate-slideInFromLeft w-[300px] pl-20 hover:bg-orange-600  ">
          <h1 className="text-left  text-3xl font-bold text-white ">
            Services
          </h1>
           {/* Blue line */}
          <div className="flex justify-center w-16 h-1 bg-orange-600 mb-4"></div>         
        </div>
        <div>
        <p data-aos="fade-up" className=" max-w-[800px]  text-s text-primary  text-justify  mx-auto mb-10">
          At XRG Advisory, we pride ourselves on our commitment to fostering growth and innovation in every organization we collaborate with. Our diverse range of services is designed to empower businesses through insightful discussions, targeted training, and strategic guidance. Whether you're looking to enhance your team's skills, navigate complex challenges, or implement effective solutions, our expert advisors are here to support you every step of the way.
          </p>
        </div>
        {/* Body section */}

          <div className="container  grid grid-cols-1 sm:grid-cols-3  place-items-center gap-5  bg-gradient-to-b  to-white from-cyan-700 pb-10"  data-aos="fade-up">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <h2 className="font-bold text-white hover:underline pl-5 pt-3">{data.title}</h2>  
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[300px] sm:w-[400px] object-cover "
                />             

              </div>
            ))}
          </div>
          {/* view all button */}
          {/* <div className="flex justify-center">
            <button className=" h-[220px] w-1  text-center  text-rotate-90 mt-10 cursor-pointer bg-sky-700 text-white py-1 px-5 ">
             M
            </button>
          </div> */}

      </div>
    </div>
  );
};

export default Services;