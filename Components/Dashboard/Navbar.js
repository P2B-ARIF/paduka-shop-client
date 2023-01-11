import { Input } from "@material-tailwind/react";
import styles from "./../../styles/dashboard/navbar.module.css";
import { BiLogInCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.nav_content} container mx-auto`}>
        <div className={styles.nav_left}>
          <h1 className="text-2xl font-bold">ARIF</h1>
          <ul className="flex items-center ml-20">
            <li className="mx-5 font-medium hover:text-pink-500">
              <Link href={""}>Add Products</Link>
            </li>
            <li className="mx-5 font-medium hover:text-pink-500">
              <Link href={""}>History</Link>
            </li>
            {!open && (
              <li>
                <Input color="pink" label="Search ID" />
              </li>
            )}
          </ul>
        </div>

        <div className={styles.nav_right}>
          <ul className="flex items-center">
            {open && (
              <>
                <li className="mx-2">
                  <Input color="pink" label="Username" />
                </li>
                <li className="mx-2">
                  <Input color="pink" label="Password" />
                </li>
              </>
            )}
            <li
              onClick={() => {
                setOpen(!open);
              }}
              className="flex items-center cursor-pointer mx-3 hover:text-pink-500"
            >
              <BiLogInCircle color="red" className="mx-1" />
              Login
            </li>
            <li className="flex items-center cursor-pointer mx-3 hover:text-pink-500">
              <HiOutlineLogout color="red" className="mx-1" />
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
