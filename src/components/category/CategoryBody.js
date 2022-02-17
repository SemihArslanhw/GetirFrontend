import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategoryName } from '../../api/products/productRequests';
import CategoryBodyProductComponent from './CategoryBodyComponent/CategoryBodyProductComponent';

function CategoryBody() {
let params = useParams();
const [categoryDatas, setCategoryDatas] = React.useState([]);
const [loading, setLoading] = React.useState(true);

useEffect(() => {
  
  getProductsByCategory(params.subCategoryName);
}, [params]);

const getProductsByCategory = async(categoryName) => {
  await getProductsByCategoryName(categoryName).then(res => {
    
    setCategoryDatas(res.data.data);
    setLoading(false);
  });
}


  if(params.categoryName === "") return null; 

  return <div className='flex flex-col bg-slate-100 p-2 w-6/12  h-fit '>
  <div className='flex gap-4 w-full'> <p>{params.categoryName}</p>
    <p>{">"}</p>
    <p>{params.subCategoryName}</p>
    </div>
    <div className='flex flex-wrap w-full gap-5 h-fit'>
      {loading ? <p>Yükleniyor....</p> : categoryDatas?.map((product) =>{
        
        return <CategoryBodyProductComponent product={product}/>
      })}
    </div>

  </div>;
}

export default CategoryBody;
