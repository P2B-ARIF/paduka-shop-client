import CategoryLists from "../../Components/Women/CategoryLists/CategoryLists.js";
import PriceRange from "../../Components/Women/PriceRange/PriceRange";
import Size from "../../Components/Women/Size/Size";
import W_Products from "../../Components/Women/W_Products/W_Products";
import Layouts from './../../Layouts/Layouts';
import React from 'react';


const women = () => {
  return (
    <Layouts>    
        <section className="container mx-auto flex gap-3 my-10">
          <div className="w-1/5">
            <CategoryLists />
            <PriceRange />
            <Size />
          </div>
          <div className="w-4/5 ">
            <W_Products />
          </div>
        </section>
      
    </Layouts>

  
  );
};

export default women;
