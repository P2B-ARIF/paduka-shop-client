import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { RiDoorOpenFill } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import styles from "./../../../styles/shared/navbar.module.css";
import React from "react";

// const poppins = Poppins({ weight: ["400"] }, { subsets: ["Poppins"] });

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div
        className={` flex items-center justify-between container mx-auto py-5`}
      >
        <div className="flex items-center">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold">ARIF</h3>
          </div>
          <ul className="flex items-center ml-10">
            <li
              className={`${styles.nav_menu} mx-5 font-semibold text-gray-700  flex`}
            >
              <Link href={"/"}> Home</Link>
            </li>
            <li
              className={`${styles.nav_menu} mx-5 font-semibold text-gray-700  flex`}
            >
              <Link href={"/women"}>Women</Link>
            </li>
            <li
              className={`${styles.nav_menu} mx-5 font-semibold text-gray-700  flex`}
            >
              <Link href={"/men"}> Men</Link>
            </li>
            <li
              className={`${styles.nav_menu} mx-5 font-semibold text-gray-700  flex`}
            >
              <Link href={"/children"}> Children</Link>
            </li>
            <li
              className={`${styles.nav_menu} mx-5 font-semibold text-gray-700  flex`}
            >
              <Link href={"/several"}> Several</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className={styles.nav_icons}>
            <li className={styles.nav_link}>
              <Link href="">
                <IoMdContact className="mx-2 text-xl" />
                <h3>Account</h3>
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href={""}>
                <FiShoppingCart className="mx-2 text-xl" />
                <h3>Bag</h3>
              </Link>
            </li>
            {/* <li className={styles.nav_link}>
              <Link href={""}>
                <GoSignOut className="mx-2 text-xl" />
                <h3>Sign Out</h3>
              </Link>
            </li> */}
            <li className={styles.nav_link}>
              <Link href={"/register"}>
                <RiDoorOpenFill className="mx-2 text-xl" />
                <h3>Sign Up</h3>
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href={"/login"}>
                <BiLogInCircle className="mx-2 text-xl" />
                <h3>Login</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
