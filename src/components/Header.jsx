import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import '../styles/header.scss'
import '../styles/MediaQuaries.scss'


 function Header() {
  
     return (
   
         <nav className='nav md:flex-row  sm:flex-col '> 
             
             <h1 className=' ecorp text-3xl  font-mono font-bold' >ECORP</h1>
            
             <main className='sm:text-white  md:text-black ' >  
                  
                 <HashLink to="/#home">  Home    </HashLink>
                 <HashLink to="/#about"> About </HashLink>
                 <HashLink to="/#brands"> Brands </HashLink>
                 <Link to={"/contact"}> Contact </Link>
                 <Link to={"/services"} > Services </Link>

                 {/*  <Link to={"/"} > HOME </Link> */}
                 {/* <a href='/#about'>About </a> */}
                 {/* <Link to={"/#about"} > About </Link> */}
                 {/* <Link to={"/#brands"} > Brands </Link>  */}
                
               

                 
              </main>

         </nav>
   
     )
  
   }
 
 export default Header