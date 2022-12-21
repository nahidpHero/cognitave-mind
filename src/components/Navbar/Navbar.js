import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="sticky top-0 flex flex-col bg-black items-center justify-center pl-3 py-6 sm:flex-row md:justify-between md:items-center">
       <div>
         <Link
           to="/"
           className="text-xl font-bold md:text-2xl text-accent hover:text-gray-300"
         >
         Cognative Mind
         </Link>
       </div>

       <div className="flex items-center mt-2 -mx-2 sm:mt-0 pr-2">
         <ul className="flex flex-wrap font-bold justify-center text-white gap-3 px-1  md:gap-5">
         <li>
     <a href="#about">Home</a>
    </li>
    <li>
    <a href="#projects">About Us</a>
   </li>
   <li>
    <a href="#skills">Projects</a>
   </li>
   <li>
   <a href="#education">Team</a>
   </li>
   <li>
  <a href="#contact">Blogs</a>
</li>
<li>
  <a href="#contact">Events</a>
</li>
<li>
  <a href="#contact">Contact Us</a>
</li>
         </ul>
       </div>
     </nav>
           
       </>
       
    );
};

export default Navbar;


{/* <div className='text-center mt-3 font-semibold text-900'>
            
<ul className="flex flex-wrap justify-center gap-4 text-3xl">
<li>
  <a href="#about">Home</a>
</li>
<li>
  <a href="#projects">About Us</a>
</li>
<li>
  <a href="#skills">Projects</a>
</li>
<li>
  <a href="#education">Team</a>
</li>
<li>
  <a href="#contact">Blogs</a>
</li>
<li>
  <a href="#contact">Events</a>
</li>
<li>
  <a href="#contact">Contact Us</a>
</li>

</ul>
</div> */}