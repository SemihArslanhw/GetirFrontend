import React from 'react'

function LeftBarCategoryComponents(categoryDatas) {
    console.log(categoryDatas);
  return (
    <div className='flex w-full justify-between'>{categoryDatas.categoryData.categoryName} <p>{">"}</p></div>
  )
}

export default LeftBarCategoryComponents