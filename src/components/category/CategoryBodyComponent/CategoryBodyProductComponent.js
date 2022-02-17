import React from 'react'

function CategoryBodyProductComponent({product}) {
  return (
    <div className=' items-center flex flex-col h-fit' key={product.productId}>
        <img className=' h-32 w-32' src={product.image}></img>
        <p className=' text-[#5d3ebc]'>{"₺"+product.unitPrice}</p>
        <p className='text-center'>{product.productName}</p>
        <p className='text-[#697488]'>{product.quantityPerUnit}</p>
        </div>
  )
}

export default CategoryBodyProductComponent