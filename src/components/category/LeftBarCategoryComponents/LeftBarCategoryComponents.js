import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';


function LeftBarCategoryComponents(categoryDatas) {
  
  const params = useParams();
  
  const categoryName = params.categoryName;
  const [openSubCategory, setOpenSubCategory] = React.useState(false);
  console.log(openSubCategory)
    useEffect(() => {
      console.log(categoryDatas);
    }, []);
  return (
    <div onClick={()=>setOpenSubCategory(!openSubCategory)} className='cursor-pointer transition-all  flex flex-col w-full '>
    <Link to={categoryDatas.categoryData.categoryName} replace><div className='w-full flex justify-between items-center gap-2'>
      <img className='w-10 h-10' src='https://cdn.getir.com/cat/5697c78dc181490f00c99fea_57817479-ebe4-4d09-b7fa-2e5a51535f0a.jpeg'></img>
      <p className='w-full '>{categoryDatas.categoryData.categoryName} </p>
      <p className='transition-all ease-in-out'>{openSubCategory ? ">" : "<"}</p>
      </div></Link>
      {openSubCategory  ? <div className='flex flex-col ml-12 text-sm my-2 h-fit gap-2'>
       {categoryDatas.categoryData.catogeries?.map((subCategory)=>{
        
        return <p key={subCategory.categoryId}>{subCategory.categoryName}</p>
       })}
         </div>: null}
      </div>
  )
}

export default LeftBarCategoryComponents