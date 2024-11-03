import React from "react";
import BannerImg from "../../assets/About/aboutph.png";
import BioImg from "../../assets/About/bg bio.jpg";
import GhasiImg from "../../assets/About/ghasi.jpeg";
import { IoMenuOutline } from "react-icons/io5";

const What = ({ imageUrl }) => {
  return (
    <div className="mt-10 pt-14  relative " >
      {/* background pattern */}
      <div className=" h-screen w-full bg-cover bg-center animate-zoom" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      {/* overlay content */}
      <div className="  absolute inset-0 flex z-10  flex-col justify-between ">
        {/* Header section */}
        <div className="mb-10  bg-cyan-800  animate-slideInFromLeft w-[300px] pl-20 hover:bg-blue-950">
          <h1 className="text-left  text-3xl font-bold text-white  ">
            About
          </h1>
           {/* Blue line */}
          <div className=" w-16 h-1 bg-white "></div>         
        </div>
        {/* Body section */}
        <div  className="container flex flex-col gap-5 justify-between mt-50 sm:flex-row ">
          {/* Who we are */}          
          <div data-aos="fade-up" className=" h-[500px] sm:h-auto sm:flex-1 px-10 pt-10 rounded-md " >
            <h1 className="font-bold text-3xl text-primary">Who We Are</h1>
            <p className="pt-7 w-full text-justify   sm:text-xl">
            Kinetic is a Strategic Consulting Group that partners with ambitious companies and leading international organisations. Our definition of success is enabling our clients to create sustainable business impact and achieve better results, faster.
            </p>
          </div>
          {/* Ghasi*/}
          <div data-aos="fade-up" className=" h-[500px] sm:h-auto sm:flex-1 px-10 pt-10 rounded-md text-white " >
            <h1 className="font-bold text-3xl  bg-secondary/50 hover:bg-secondary transition-all mb-2">Dr. Ghazi Kablouti</h1>
            <p className="p-5    w-full text-justify  bg-secondary/50 ">
            Ghasi is the visionary founder of XRG Impact Management Advisory. With years of experience in sustainable strategy and impactful advisory, Ghasi partners with organizations to drive long-term growth and positive change. His approach integrates innovative thinking, expert guidance, and a commitment to measurable results. Through XRG, he works closely with global enterprises, fostering growth that resonates with the world’s most pressing challenges and opportunities.
            </p>
          </div>
        




        </div>
      </div>
    </div>
  )
}

export default What




{/* <div data-aos="fade-up" className=" h-[500px] sm:h-auto sm:flex-1 px-10 pt-10 text-white rounded-md " 
style={{
  backgroundImage: `url(${BannerImg})`, // Inline style for the image path
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
}}            
>
<h1 className="font-bold text-3xl text-primary">Who We Are</h1>
<p className="pt-5 w-3/4  h-2/4 sm:text-2xl">
Kinetic is a Strategic Consulting Group that partners with ambitious companies and leading international organisations. Our definition of success is enabling our clients to create sustainable business impact and achieve better results, faster.
</p>
</div> */}