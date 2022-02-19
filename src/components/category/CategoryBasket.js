import React from 'react';

function CategoryBasket() {
  return <div className='flex flex-col sticky top-32 w-96 p-2 gap-2  h-fit'>
    <p>Sepetim</p>
    <div className='flex flex-col items-center justify-evenly h-96 rounded-lg outline outline-2 outline-yellow-300'>
   <div className='h-1/3'></div>
   <div className='flex flex-col items-center'>
      <p className='text-[#5d3ebc] font-sans text-lg'>Sepetiniz şu an boş</p>
      <p className='text-gray-400'>Sipariş vermek için sepetinize ürün </p>
      <p className='text-gray-400'>ekleyin</p>
   </div>
    </div>
  </div>;
}

export default CategoryBasket;
