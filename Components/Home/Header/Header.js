import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
// import { Button } from "@material-tailwind/react";
import products from "./../../../public/assets/ladies-bag.png";
import styles from "./../../../styles/home/header.module.css";

const Header = () => {
  return (
    <header
      className={`${styles.header} container mt-10 mx-auto grid grid-cols-2 items-center py-10 px-20 rounded-md`}
    >
      <div>
        <h1 className="text-5xl font-bold uppercase">
          Ladies Prive Roma Top Handle Bag
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatibus quas delectus.
        </p>
        <button className="btn">See More</button>
      </div>
      <div className="relative">
        <div className="relative flex justify-end">
          <Image
          className="w-[400px] h-[400px]"
            src={products}
            width={500}
            height={500}
            alt="products ladies bag"
          />
        </div>
        <div className={`${styles.h_product_card} absolute bottom-0 left-0rounded-xl p-4 w-1/2 `}>
          <h3 className="bg-transparent">20% OFF Ladies Prive Roma Top Handle Bag</h3>
          <div className="flex items-center bg-transparent my-1">
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
          </div>
          <span className="bg-transparent text-lg font-bold text-gray-800 mr-5">$125.00</span>
          <span className={styles.off}>20% OFF</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
