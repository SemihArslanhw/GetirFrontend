import React from 'react';
import { useEffect } from 'react';
import * as api from '../../api/index';
import LeftBarCategoryComponents from './LeftBarCategoryComponents/LeftBarCategoryComponents';

function CategoryLeftBar() {
   
  const [superCategories, setSuperCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    
    getAllSuperCategories();
  }, []);

  const getAllSuperCategories = async() => {
   await api.getAllSuperCategories().then(res => {
     setSuperCategories(res.data.data);
     
      setLoading(false);
    });
  }

  return <div className='w-96 p-2 sticky bg-slate-100 rounded-lg min-w-fit font-sans text-base h-fit flex flex-col'>
    <p>Kategoriler</p>
    <div className="flex flex-col w-full h-fit p-4 gap-2">
    
    {loading ? <div>Category Comp</div> :
    superCategories.map(superCategory => {
      return <LeftBarCategoryComponents  key={superCategory.categoryId} categoryData={superCategory} ></LeftBarCategoryComponents>
    })}</div>
    </div>;
}

export default CategoryLeftBar;
