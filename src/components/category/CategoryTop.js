import React from 'react'
import CategoryTopSlider from './CategoryTopSlider/CategoryTopSlider'

function CategoryTop() {
  return (
    <div className='p-4 flex w-fit gap-20 '>
     <div className='flex w-20 items-center gap-4'>
            <img className='h-10 w-10' src="https://getir.com/_next/static/images/bag-3312fc73968345e26f3f610d4f4440c5.svg"></img>
            <div className='flex flex-col'>
                <p className='text-sm text-gray-500'>MİNİMUM</p>
                <p>₺40,00</p>
            </div>

        </div>
        <div className='flex w-40 items-center gap-4'>
            <img className='h-10 w-10' src="https://getir.com/_next/static/images/courier-pin-ff44cc9dd5c2b3c566e2c422a7e6a2f8.svg"></img>
            <div className='flex flex-col'>
                <p className='text-sm text-gray-500'>GETİRMESİ</p>
                <p>₺0,00 - ₺5,99</p>
            </div>

        </div>
       
    </div>
  )
}

export default CategoryTop