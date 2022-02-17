import CategoryBasket from "./CategoryBasket";
import CategoryBody from "./CategoryBody";
import CategoryLeftBar from "./CategoryLeftBar";
import CategoryTop from "./CategoryTop";


function CategoryComp() {
 
  

  return  <div className="flex flex-col container mx-auto gap-10 ">
   <CategoryTop/>
<div className="flex gap-10">
 <CategoryLeftBar/>
<CategoryBody/>
<CategoryBasket/>
</div>
  </div>;
    
  
 
}

export default CategoryComp;
