import React from 'react'
import Adivising from "../../assets/services/advising.jpg"

const ServicesCards = () => {
  return (
    <div className='bg-blue-950'>
        <div className='container '>
      
            <div className='flex  flex-col text-white  border-t '> 
                <h1 className='text-3xl border-l   ' >Services</h1>
                {/* service1 */}
                <div className='flex justify-center items-center my-20 gap-20'>
                {/* text*/}
                   <div className='flex-1'>
                       <h1 className='text-6xl font-bold '>Advising</h1>
                       <p className='pt-5 pb-10'>When done well, digital architecture creates value by delivering business insight, ensuring consistency, and accelerating decision-making. <br/> We help you plan and shape your digital transformation efforts.</p>
                       {/* buttons*/}
                       <div className='flex  gap-5'>
                          <button className='h-[45px] rounded-sm text-white border px-10 w-fit'>
                            Learn more
                          </button>  
                          <button className='h-[45px] rounded-sm text-white border  px-10 w-fit'>
                            Contact
                          </button>                       
                       </div>

                   </div>
                   {/* image*/}
                   <div  className='flex-1'>
                      <img src={Adivising } alt=""  className='h-[400px] w-auto'/>
                   </div>
                </div>      
                {/* service2 */}
                <div className='flex justify-center items-center my-20 gap-20'>
                   {/* image*/}
                   <div  className='flex-1'>
                      <img src={Adivising } alt=""  className='h-[400px] w-auto'/>
                   </div>
                {/* text*/}
                   <div className='flex-1'>
                       <h1 className='text-6xl font-bold '>Talking</h1>
                       <p className='pt-5 pb-10'>When done well, digital architecture creates value by delivering business insight, ensuring consistency, and accelerating decision-making. <br/> We help you plan and shape your digital transformation efforts.</p>
                       {/* buttons*/}
                       <div className='flex  gap-5'>
                          <button className='h-[45px] rounded-sm text-white border px-10 w-fit'>
                            Learn more
                          </button>  
                          <button className='h-[45px] rounded-sm text-white border  px-10 w-fit'>
                            Contact
                          </button>                       
                       </div>

                   </div>
                </div>   
                {/* service1 */}
                <div className='flex justify-center items-center my-20 gap-20'>
                {/* text*/}
                   <div className='flex-1'>
                       <h1 className='text-6xl font-bold '>Teaching</h1>
                       <p className='pt-5 pb-10'>When done well, digital architecture creates value by delivering business insight, ensuring consistency, and accelerating decision-making. <br/> We help you plan and shape your digital transformation efforts.</p>
                       {/* buttons*/}
                       <div className='flex  gap-5'>
                          <button className='h-[45px] rounded-sm text-white border px-10 w-fit'>
                            Learn more
                          </button>  
                          <button className='h-[45px] rounded-sm text-white border  px-10 w-fit'>
                            Contact
                          </button>                       
                       </div>

                   </div>
                   {/* image*/}
                   <div  className='flex-1'>
                      <img src={Adivising } alt=""  className='h-[400px] w-auto'/>
                   </div>
                </div> 
         
            </div>


        </div>
    </div>
  )
}

export default ServicesCards