import React from 'react'
import '../styles/home.scss'
import d from '../assets/d.png'
import { AiFillGoogleCircle, AiFillAmazonCircle, BsFacebook, AiFillApple, AiFillFacebook } from 'react-icons/ai';
import b from "../assets/b.jpg";
import '../styles/MediaQuaries.scss'

function Home() {
    return (


        <div className='home'>
            <img src={b} alt="" />
            <div className=' flex flex-row justify-center '>
        
          {/* <h1 className=' title absolute z-10 bottom-80  font-bold text-6xl   text-yellow-400   sm:text-base sm:mb-56  md:text-5xl md:mb-24   ' > All Solution are Here  </h1>
           */}
        </div>
            

               {/* About section */}
        <div id='about'  className='home2    flex flex-col justify-between items-center    h-[80%]  w-[100%]  bg-gray-500   p-[100px]   text-white font-mono   '>
                              
                 <div className='about flex flex-col justify-start items-center sm:mb-5  '>

                    <h1 className='text-3xl' > ABOUT </h1>
                    <div className=' h-2 w-16 bg-green-500 '>  </div>

                </div>
               
                 <div className='about   flex flex-row gap-5 justify-start items-center  mb-14 sm:flex-col md:flex-row  ' >
                 <img src={d} className='h-48 w-48  bg-lime-400  rounded-lg ' alt="graphics"  />

                  <div className=' w-[600px] ml-5 flex'>
                      <p className='about-description'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Necessitatibus porro beatae molestiae natus odio provident temporibus
                          officia vel impedit obcaecati. Repellat!
                      </p>
                      </div>
                       </div>
                    
             </div>
      
            
               {/* who are we  */}
        <div id="" className='home3 flex flex-col justify-between items-center  h-[80%]  w-[100%]  bg-gray-700   p-[100px]   text-white font-mono   '>
                


                  <div className=' waw flex flex-col justify-start items-center  sm:mb-5  '>

                      <h1 className='text-3xl' > WHO ARE WE? </h1>
                      <div className=' h-2 w-16 bg-green-500 '>  </div>

  
            
                  </div>

          <div className=' waw flex flex-row gap-5  justify-start items-center mb-10  sm:flex-col md:flex-row  '>
            
            <img src={d} className='h-48 w-48  bg-lime-400  rounded-lg ' alt="graphics" />
                  <div className=' w-[600px] '>
                      <p className='waw-description' >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Necessitatibus porro beatae molestiae natus odio provident temporibus
                         officia vel impedit obcaecati. Repellat!
                      </p>
                  </div>
        
                 </div>
                    
           </div>
        

                      {/* brands */}
         <div id="brands" className=' home4 flex flex-col justify-between items-center   h-[80%]  w-[100%] bg-gray-500   p-[100px]   text-white font-mono   '>
               

                
                 <div className='brands  flex flex-col justify-start items-center sm:mb-5 '>

                     <h1 className='text-3xl' > BRANDS </h1>
                     <div className=' h-2 w-16 bg-green-500 '>  </div>

                  </div>
               
                  <div className='brands flex flex-row gap-5 justify-around items-center  mb-16  sm:flex-col md:flex-row ' >
               
                 
                       <div className='h-32 w-32  bg-zinc-950  rounded-full '>
                        
                         <AiFillGoogleCircle  className='h-10 w-10 mx-auto  mt-7 ' />
                      
                             <p className='text-center my-auto mx-auto'>Google</p>
                       </div>
                  
                
                        <div className='h-32 w-32  bg-yellow-400  rounded-full '>
                        
                           <AiFillAmazonCircle  className='h-10 w-10 mx-auto  mt-7 ' />
                      
                            <p className='text-center my-auto mx-auto'>Amazon</p>
                       </div>
 
                    
                       <div className='h-32 w-32  bg-gray-400  rounded-full '>
                        
                         <AiFillApple  className='h-10 w-10 mx-auto  mt-7 ' />
                       
                            <p className='text-center my-auto mx-auto'>Apple</p>
                       </div>
                  
                    
                     <div className='h-32 w-32  bg-blue-700  rounded-full '>
                        
                         <AiFillFacebook  className='h-10 w-10 mx-auto  mt-7 ' />
                       
                            <p className='text-center my-auto mx-auto'>Facebook</p>
                      </div>
                   
                    
                   </div>
                     
          </div>
   
            

        </div>
        
        // <div>

        // </div>
  
  )
}

export default Home