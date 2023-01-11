import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const CategoryLists = ({ productsList }) => {
  return (
    <li className="products__List flex items-center justify-between my-2 py-2 hover:bg-pink-500 hover:text-white px-5">
      {productsList.name}
      <AiOutlineRight />
    </li>
  );
};

export default CategoryLists;
