import C_CategoryLists from './../../Components/Children/CategoryLists/C_CategoryLists';
import C_PriceRange from "../../Components/Children/PriceRange/C_PriceRange";
import C_Size from './../../Components/Children/Size/C_Size';
import C_Products from './../../Components/Children/C_Products/C_Products';
import Layouts from "../../Layouts/Layouts";
import React from 'react';


const children = () => {
  return (
    <Layouts title="children">
        <section className="container mx-auto flex gap-2">
          <div className="w-1/5">
            <C_CategoryLists />
            <C_PriceRange />
            <C_Size />
          </div>
          <div className="w-4/5 ">
            <C_Products />
          </div>
        </section>     
    </Layouts>
  );
};

export default children;
