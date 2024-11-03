import React from "react";
import Slider from "react-slick";
import BgImg from "../../assets/hero/vitre.jpeg"


const TestimonialData = [
  {
    id: 1,
    name: "Corporations",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Financial Services",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Industrial Networks",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Standardization & Regulatory bodies",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Meetings & Conferences",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 6,
    name: "Universities & Business Schools",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },

];

const IndustriesS = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="   ">
        <div className="pt-14 pb-12 ">
        {/* header section */}
        <div className=" bg-secondary  animate-slideInFromLeft w-[300px] pl-20 hover:bg-blue-500">
          <h1 className="text-left  text-3xl font-bold text-white ">
            Industries
          </h1>
           {/* Blue line */}
          <div className=" w-16 h-1 bg-blue-500 "></div>         

        </div>
        <div className=" h-screen flex justify-center items-center  ">


        {/* Industries cards */}
        
        <div  className="container bg-white " >
          <Slider {...settings}>
            
            {TestimonialData.map((data) => (
              <div className="my-4 bg-white h-[200px] flex justify-center items-center " 
                data-aos="fade-up"   
              >
                <div
                  key={data.id}
                  className="flex  flex-col gap-4 shadow-lg py-8 px-6 mx-4  h-[200px] relative  "
                  style={{
                    backgroundImage: `url(${BgImg})`, // Inline style for the image path
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                  }}   
                >
                  <div className="flex flex-col items-center gap-4 bg-white/20">
                    <div className="space-y-3 ">
                      <p className="text-xs text-secondary ">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
     
          </Slider>
        </div>
        </div>
        </div>
    </div>
  )
}

export default IndustriesS