import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import products from "./../../../public/assets/ladies-bag.png";

const Header = () => {
  return (
    <header className="container mx-auto grid grid-cols-2 bg-blue-50 items-center py-10 px-20 rounded-md">
      <div>
        <h1 className="text-5xl font-bold uppercase">
          Ladies Prive Roma Top Handle Bag
        </h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatibus quas delectus.
        </p>
        <Button>See More</Button>
      </div>
      <div className="relative">
        <div className="relative  flex justify-end">
          <Image
            //   className=""
            src={products}
            width={450}
            height={500}
            alt="products ladies bag"
          />
        </div>
        <div className=" absolute bottom-0 left-0 bg-blue-gray-50 rounded-xl p-4 w-1/2 ">
          <h3>20% OFF Ladies Prive Roma Top Handle Bag</h3>
          <div className="flex items-center my-1">
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
            <AiFillStar className="text-yellow-800" />
          </div>
          <span className="text-xl font-medium mr-5">$125.00</span>
          <span className="bg-yellow-500 p-1 rounded-md">20% OFF</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
