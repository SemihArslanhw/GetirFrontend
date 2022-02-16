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

  return <div className="flex flex-col w-2/12 h-fit p-4 ">{loading ? <div>Category Comp</div> :
    superCategories.map(superCategory => {
      return <LeftBarCategoryComponents  key={superCategory.categoryId} categoryData={superCategory} ></LeftBarCategoryComponents>
    })}</div>;
}

export default CategoryLeftBar;
