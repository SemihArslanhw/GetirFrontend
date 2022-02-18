import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategoryName, getProductsBySuperCategoryName } from '../../api/products/productRequests';
import CategoryBodyProductComponent from './CategoryBodyComponent/CategoryBodyProductComponent';

function CategoryBody() {
const bodyRef = React.useRef([]);
let params = useParams();
const [categoryDatas, setCategoryDatas] = React.useState([]);
const [loading, setLoading] = React.useState(true);

useEffect(() => {
  
  getProductsBySuperCategoryN(params.categoryName);
  console.log(params)
}, [params]);



const goToCommentSection = () => { 
 if(categoryDatas){
  const selectedCategory = (bodyRef.current.find(x => x?.id === params.subCategoryName));
  console.log(selectedCategory)
  window.scrollTo({
    top: selectedCategory.offsetTop - 180,
    behavior: 'smooth'
  });
  }};



const getProductsBySuperCategoryN = async(superCategoryName) => {
  await getProductsBySuperCategoryName(superCategoryName).then(res => {
    setCategoryDatas(res.data.data);
    setLoading(false);
    console.log(res.data.data);
    goToCommentSection();
  });
}


  if(params.categoryName === "") return null; 

  return <div  className='flex flex-col bg-slate-100 p-2 w-6/12  h-fit '>
  <div className='flex gap-4 w-full'> <p>{params.categoryName}</p>
    <p>{">"}</p>
    <p>{!loading ? categoryDatas.category[0].categoryName : <p>Loading...</p>}</p>
    </div>
    <div className='flex flex-wrap w-full pt-5 gap-5 h-fit'>
      {loading ? <p>Yükleniyor....</p> : categoryDatas.category.map((category , i)=>{
        return <div ref={(element)=>bodyRef.current.push(element)} id={category.categoryName} key={category.categoryId } className='flex flex-col w-full'>
        <p>{i === 0 ? null : category.categoryName}</p>
        <div className='flex flex-wrap'>
        {categoryDatas?.product?.map((product)=>{
         if(product.category.categoryId === category.categoryId)
         return <CategoryBodyProductComponent key={product.productId} product={product}/>
        })}
        </div>
      </div>
      })}
    </div>

  </div>;
}

export default CategoryBody;
