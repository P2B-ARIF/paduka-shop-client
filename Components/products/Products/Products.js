import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

const Products = ({ shoesCollection }) => {
  return (
    <article className="card__vertical">
      <div className="cv_image">
        <Image
          className=""
          src={shoesCollection.image}
          width={400}
          height={400}
          alt="products collection"
        />
      </div>
      <div className="cv_details">
        <p>{shoesCollection.brand}</p>
        <h4>{shoesCollection.name}</h4>
        <div className="flex items-center my-2">
          <AiFillStar className="text-yellow-700" />
          <AiFillStar className="text-yellow-700" />
          <AiFillStar className="text-yellow-700" />
          <AiFillStar className="text-yellow-700" />
          <AiFillStar className="text-yellow-700" />
        </div>
        <span className="cv_price">{`${shoesCollection.price} BDT`}</span>
        <button>
          <FaCartPlus />
        </button>
      </div>
    </article>
  );
};

export default Products;
