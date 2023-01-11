import Image from "next/image";
import Link from "next/link";
import logo from './../../../public/assets/shop-logo.png'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-gray-200">
      <div className="container mx-auto flex p-10 bg-pink-500">
        <div className=" h-full w-3/5 grid grid-cols-2 gap-2 bg-pink-500">
          <div className="bg-pink-500">
            <ul className="bg-pink-500">
                <li className="text-xl font-bold mb-5 bg-pink-500">Page</li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Home</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Women </Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Men </Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Children</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Gift</Link>
              </li>
              {/* <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Login</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Register</Link>
              </li> */}
            </ul>
          </div>
          <div className="bg-pink-500">
            <ul className="bg-pink-500" >
                <li className="text-xl font-bold mb-5 bg-pink-500">Home Section</li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Discount Products</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Women Collection</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Men Collection</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">For Children</Link>
              </li>
              <li className="mt-1 bg-pink-500">
                <Link href="" className="bg-pink-500 text-white">Gift Items</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-full w-2/5 bg-pink-500">
          <ul className="bg-pink-500">
            <li className="flex items-center bg-pink-500">
              {/* <Image className="w-[50px] h-[50px]" src={logo} width={100} height={100} alt="company logo" /> */}
              <h4 className="bg-pink-500 text-white text-2xl font-bold">ARIF</h4>
            </li>
            <li className="mt-1 bg-pink-500">Address: Rangunia, Chittagong, Bangladesh</li>
            <li className="mt-1 bg-pink-500">Phone: +880111111111</li>
            <li className="mt-1 bg-pink-500">Email: mohammadarif4319@gmail.com</li>
            <li className="mt-1 bg-pink-500 flex items-center">
                <h2 className="mr-5 bg-pink-500">Social</h2>
                <a href="" className="bg-pink-500">
                <AiFillFacebook className=" ml-2 text-xl bg-pink-500"/>
                </a>
                <a href="" className="bg-pink-500">
                <AiFillInstagram className=" ml-2 text-xl bg-pink-500"/>
                </a>
                <a href="" className="bg-pink-500">
                <AiFillYoutube className=" ml-2 text-xl bg-pink-500"/>
                </a>
                <a href="" className="bg-pink-500">
                <AiOutlineTwitter className=" ml-2 text-xl bg-pink-500"/>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-2 bg-pink-500">Created by 
                
      <a href="" className="underline ml-2 bg-pink-500">
            MOHAMMAD ARIF
                </a>
      </p>
    </footer>
  );
};

export default Footer;
