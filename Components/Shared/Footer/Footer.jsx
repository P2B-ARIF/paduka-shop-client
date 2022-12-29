import Image from "next/image";
import Link from "next/link";
import logo from './../../../public/assets/shop-logo.png'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-blue-gray-800 text-gray-200">
      <div className="container mx-auto flex p-10">
        <div className=" h-full w-3/5 grid grid-cols-2 gap-2">
          <div>
            <ul>
                <li className="text-xl font-bold mb-5">Page</li>
              <li className="mt-1">
                <Link href="">Home</Link>
              </li>
              <li className="mt-1">
                <Link href="">Women </Link>
              </li>
              <li className="mt-1">
                <Link href="">Men </Link>
              </li>
              <li className="mt-1">
                <Link href="">Children</Link>
              </li>
              <li className="mt-1">
                <Link href="">Gift</Link>
              </li>
              {/* <li className="mt-1">
                <Link href="">Login</Link>
              </li>
              <li className="mt-1">
                <Link href="">Register</Link>
              </li> */}
            </ul>
          </div>
          <div>
            <ul >
                <li className="text-xl font-bold mb-5">Home Section</li>
              <li className="mt-1">
                <Link href="">Discount Products</Link>
              </li>
              <li className="mt-1">
                <Link href="">Women Collection</Link>
              </li>
              <li className="mt-1">
                <Link href="">Men Collection</Link>
              </li>
              <li className="mt-1">
                <Link href="">For Children</Link>
              </li>
              <li className="mt-1">
                <Link href="">Gift Items</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-full w-2/5">
          <ul>
            <li className="flex items-center">
              <Image className="w-[50px] h-[50px]" src={logo} width={100} height={100} alt="company logo" />
              <h4>ARIF</h4>
            </li>
            <li className="mt-1">Address: Rangunia, Chittagong, Bangladesh</li>
            <li className="mt-1">Phone: +880111111111</li>
            <li className="mt-1">Email: mohammadarif4319@gmail.com</li>
            <li className="mt-1 flex items-center">
                <h2 className="mr-5">Social</h2>
                <a href="">
                <AiFillFacebook className=" ml-2 text-xl"/>
                </a>
                <a href="">
                <AiFillInstagram className=" ml-2 text-xl"/>
                </a>
                <a href="">
                <AiFillYoutube className=" ml-2 text-xl"/>
                </a>
                <a href="">
                <AiOutlineTwitter className=" ml-2 text-xl"/>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-2">Created by 
                
      <a href="" className="underline ml-2">
            MOHAMMAD ARIF
                </a>
      </p>
    </footer>
  );
};

export default Footer;
