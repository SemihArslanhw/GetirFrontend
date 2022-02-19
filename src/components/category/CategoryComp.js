import CategoryBasket from "./CategoryBasket";
import CategoryBody from "./CategoryBody";
import CategoryLeftBar from "./CategoryLeftBar";
import CategorySlider from "./CategorySlider";
import CategoryTop from "./CategoryTop";


function CategoryComp() {
 
  

  return  <div className="block flex-col relative pt-32 container mx-auto gap-3 ">
   <CategoryTop/>
   <CategorySlider/>
<div className="flex gap-10">
 <CategoryLeftBar/>
<CategoryBody/>
<CategoryBasket/>
</div>
  </div>;
    
  
 
}

export default CategoryComp;
