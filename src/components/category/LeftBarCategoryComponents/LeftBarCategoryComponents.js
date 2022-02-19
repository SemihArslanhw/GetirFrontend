import React, { useEffect } from 'react'
import { Link, useParams , useNavigate }  from 'react-router-dom';


function LeftBarCategoryComponents(categoryDatas) {
  let navigate = useNavigate();
  const params = useParams();
  const categoryName = params.categoryName;
  const [openSubCategory, setOpenSubCategory] = React.useState(false);
  
    
  return (
    <div   className='cursor-pointer transition-all  flex flex-col w-full '>
    <div className='w-full flex justify-between items-center gap-2' onClick={()=>{navigate("/kategori/" + categoryDatas.categoryData.categoryName + "/" + categoryDatas.categoryData?.catogeries[0].categoryName);setOpenSubCategory(!openSubCategory)}}>
      <img className='w-10 h-10' src='https://cdn.getir.com/cat/5697c78dc181490f00c99fea_57817479-ebe4-4d09-b7fa-2e5a51535f0a.jpeg'></img>
      <p className='w-full '>{categoryDatas.categoryData.categoryName} </p>
      <p className='transition-all ease-in-out'>{openSubCategory ? ">" : "<"}</p>
      </div>
      {categoryName === categoryDatas.categoryData.categoryName  ? <div className='flex flex-col ml-12 text-sm my-2 h-fit gap-2'>
       {categoryDatas.categoryData.catogeries?.map((subCategory)=>{
        
        return <p onClick={()=>{navigate("/kategori/" + categoryDatas.categoryData.categoryName + "/" + subCategory.categoryName)}} key={subCategory.categoryId}>{subCategory.categoryName}</p>
       })}
         </div>: null}
      </div>
  )
}

export default LeftBarCategoryComponents