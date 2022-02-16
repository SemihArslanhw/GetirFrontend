import React from 'react';
import {Link} from "react-router-dom"

function Header() {
  return <div className='flex flex-col w-full h-32 bg-[#5d3ebc]'>

    <div className='flex  bg-[#4c3398] justify-around  w-full pt-1 text-[#ffd300]   h-2/5 '>
    <div className='container mx-auto w-full h-full flex items-center justify-between'>
    <div className='h-full'>
    <Link className='w-20 rounded-t-lg flex bg-[#5d3ebc] h-full justify-center items-center ' to="/"><p>Getir</p></Link> 
    </div>
     <div className='h-full items-center text-white pb-1 flex gap-5'>
       <div>Kayıt Ol</div>
       <div>Kampanyalar</div>
       <div>Türkçe</div>
     </div>
    </div>
    </div>
    <div className='container mx-auto flex justify-between items-center h-3/5'>

    <img src='logo.svg' alt='Getir Logo'></img>
    </div>
  </div>;
}

export default Header;
