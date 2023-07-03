import React from 'react'

const Contact = () => {
    return (
      
         <div > 
            
          <div className='bg-slate-400  relative z-0  h-[80vh] w-[100%]'> </div>

      
        <form action="" className=' absolute z-20 top-32 left-10 right-10 flex flex-col justify-center items-center   '>
        
          
          <h1 className='font-bold' > Contact Us </h1>
          
        
           <div className=' flex flex-col justify-center items-center gap-10 mt-5'>
            

            <div className='flex flex-col  justify-center items-center '>
              <label htmlFor="">Name</label>
              <input type="text"required placeholder='Name...' />
            </div>
          
            <div className='flex flex-col  justify-center items-center '>
            <label htmlFor="">Email  </label>
            <input  type="text" required placeholder='abc @gmail.com...' />
            </div>

            <div className='flex flex-col justify-center items-center'>
            <label htmlFor="">Tell Us About</label>
            <input type="text"  required  placeholder='Feedback...' />
            </div>
          
               <button className=' h-8 w-16 text-white bg-neutral-950' > Send  </button>

            </div>
          
        </form>
                
           </div>
       
  )
}

export default Contact