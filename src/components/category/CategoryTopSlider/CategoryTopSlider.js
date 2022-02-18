import React from 'react'
import Slider from "react-slick";

function CategoryTopSlider() {
    const settings = {
        pauseOnFocus:true,
        infinite: true,
        arrows:true,
        speed: 400,
        slidesToShow: 3,
        autoplay:true,
        slidesToScroll: 1
      };
  return (
    <div className=''>
    <Slider {...settings}>
      <div className='p-4'>
        <img className='rounded-xl' src='https://cdn.getir.com/misc/620a9ecb6617394e7e798cbd_banner_tr_1644863476309.jpeg'></img>
      </div>
      <div className='p-4'>
        <img className='rounded-xl' src='https://cdn.getir.com/promos/619b6ed24b0adb78c7127d00_banner_tr_1637576705320.jpeg'></img>
      </div>
      <div className='p-4'>
        <img className='rounded-xl' src='https://cdn.getir.com/misc/61fbce29d1f1e88d889ce25b_banner_tr_1643892482682.jpeg'></img>
      </div>
      <div className='p-4'>
        <img className='rounded-xl' src='https://cdn.getir.com/promos/60773e911854eb5387641619_banner_tr_1618427869506.jpeg'></img>
      </div>
      <div className='p-4'>
        <img className='rounded-xl' src='https://cdn.getir.com/promos/61f802cd694aa046e966c4ce_banner_tr_1644567028897.jpeg'></img>
      </div>
       <div className='p-4'>
        <img className='rounded-xl' src='https://cdn.getir.com/misc/620a9ecb6617394e7e798cbd_banner_tr_1644863476309.jpeg'></img>
      </div>
    </Slider>
  </div>
  )
}

export default CategoryTopSlider