import React from 'react'
import Img1 from "../../assets/services/advising.jpg"
import Img2 from "../../assets/services/talking.jpg"
import Img3 from "../../assets/services/teaching.jpg"


const IndustriesData = [
    {
      id: 1,
      img: Img1,
      title: "Corporations",
      description:"Corporations operate in a dynamic environment where sustainable growth, social responsibility, and financial performance must be balanced. We help corporations embed impactful strategies into their core operations, driving both profitability and positive change for their stakeholders and communities.",
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Financial Services",
      description:"Financial Services are at the forefront of fostering economic growth and innovation. Our expertise supports financial institutions in aligning investment strategies with sustainability goals, risk management, and social impact, ensuring long-term value for clients and society alike.",
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Industrial Networks",
      description:"Industrial Networks bring together companies to collaborate on best practices, technological advancements, and sustainable innovations. We guide these networks to maximize impact through cross-industry partnerships, shared knowledge, and initiatives that benefit both the economy and the environment.",
      color: "brown",
      aosDelay: "400",
    },
    {
        id: 4,
        img: Img3,
        title: "Standardization & Regulatory bodies",
        description:"Standardization & Regulatory Bodies play a crucial role in setting frameworks that ensure quality, safety, and ethical practices across industries. Our advisory services help these organizations develop standards that reflect modern expectations for social and environmental responsibility.",
        color: "brown",
        aosDelay: "400",
      },
      {
        id: 5,
        img: Img3,
        title: "Meetings & Conferences",
        description:"Meetings & Conferences are vital for knowledge sharing, networking, and advancing industry agendas. We help organizers design impactful events that inspire participants and promote meaningful discussions around sustainability, innovation, and industry challenges.",
        color: "brown",
        aosDelay: "400",
      },
      {
        id: 6,
        img: Img3,
        title: "Universities & Business Schools",
        description:"Universities & Business Schools shape the leaders of tomorrow. We partner with educational institutions to integrate impact-driven perspectives into their curricula, equipping students with the skills and insights needed to navigate the evolving landscape of business and social responsibility.",
        color: "brown",
        aosDelay: "400",
      },
  
  ];

const IndustriesCards = () => {
  return (
    <div className='bg-blue-950  '>
        <div className='container  '>
        <h1 className='text-3xl border-l border-t text-white ' >Industries</h1>
        <div className=' flex  justify-center  gap-20 flex-wrap py-20'>
        {IndustriesData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className=" w-2/5 bg-black/30 h-[500px]"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-full "
                />                   
                <h2 className="font-bold text-white hover:underline py-3 pl-5 pr-3 bg-gray-400/40 w-3/4">{data.title}</h2>
                <p className='text-white p-5 text-justify '> {data.description}</p>  
         

              </div>
            ))}

        </div>
        </div>
    </div>
  )
}

export default IndustriesCards