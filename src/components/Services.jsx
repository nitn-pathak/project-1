import React from 'react'
import { Carousel } from "react-responsive-carousel" 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c from "../assets/c.jpg"
import b from "../assets/b.jpg"

const Services = () => {
  return (
    
    <div> 
      
      <Carousel
        infiniteLoop
        autoPlay
        showArrows
        showStatus={false}
        showThumbs={false}
        interval={1000}
      >
           
      <div className='  relative z-0  h-[80vh] w-[100%]'>      
        <img src={c} className='object-contain img1 ' alt="" />
        <p className='legend' >Web Devlopment</p>
      </div>

          <div className='  relative z-0  h-[80vh] w-[100%]'>      
        <img src={b} className='object-contain img2 ' alt="" />
        <p className='legend'>Android Devlopment</p>
      </div>

      </Carousel>
                  </div>
      

  )
}

export default Services