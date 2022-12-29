import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/assets/shop-logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { GoSignOut } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-5">
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={logo} width={50} height={50} alt="" srcSet="" />
          <h3 className="text-xl font-semibold">ARIF</h3>
        </div>
        <ul className="flex items-center ml-10">
          <li className="mx-5 font-semibold text-gray-600  flex">
            <Link href={"/"}> Home</Link>
          </li>
          <li className="mx-5 font-semibold text-gray-600  flex">
            <Link href={"/women"}>Women</Link>
          </li>
          <li className="mx-5 font-semibold text-gray-600  flex">
            <Link href={"/men"}> Men</Link>
          </li>
          <li className="mx-5 font-semibold text-gray-600  flex">
            <Link href={"/children"}> Children</Link>
          </li>
          <li className="mx-5 font-semibold text-gray-600  flex">
            <Link href={"/several"}> Several</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <IoMdContact className="mx-3 text-xl" />
        <FiShoppingCart className="mx-3 text-xl" />
        <GoSignOut className="mx-3 text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
