import M_CategoryLists from "./../../Components/Men/CategoryLists/M_CategoryLists";
import M_PriceRange from "./../../Components/Men/PriceRange/M_PriceRange";
import M_Size from "./../../Components/Men/Size/M_Size";
import M_Products from "./../../Components/Men/M_Products/M_Products";
import Layouts from "../../Layouts/Layouts";
import React from 'react';


const men = () => {
  return (
    <Layouts title={"men"}>
      <section className="container mx-auto flex gap-3  my-10">
        <div className="w-1/5">
          <M_CategoryLists />
          <M_PriceRange />
          <M_Size />
        </div>
        <div className="w-4/5 ">
          <M_Products />
        </div>
      </section>
    </Layouts>
  );
};

export default men;
