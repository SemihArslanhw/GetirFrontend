import CategoryBasket from "./CategoryBasket";
import CategoryBody from "./CategoryBody";
import CategoryLeftBar from "./CategoryLeftBar";


function CategoryComp() {
 
  

  return  <div className="flex container mx-auto gap-10 h-20">
   

 <CategoryLeftBar/>
<CategoryBody/>
<CategoryBasket/>
  </div>;
    
  
 
}

export default CategoryComp;
