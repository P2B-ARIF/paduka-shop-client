import Image from "next/image";
import img from "./../public/assets/visualization.svg";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import Layouts from "../Layouts/Layouts";
import React from "react";

const login = () => {
  return (
    <Layouts title="login">
      <div className="container mx-auto grid grid-cols-2 gap-5 items-center h-[85vh]">
        <div>
          <Image className="max-h-[60vh]" src={img} width={500} height={500} alt="signup photo" />
        </div>
        <div className="max-w-[500px]">
          <form>
            <h1 className="text-3xl font-bold">Login</h1>

            <ul>
              <li className="my-5">
                <Input color="pink" label="Email" />
              </li>
              <li className="my-5">
                <Input color="pink" label="Password" />
              </li>
            </ul>

            <button className="text-white font-medium rounded-xl bg-pink-500 hover:bg-pink-600 py-3 mt-5 w-full">
              Login
            </button>
            <p className="text-right text-sm mr-10 mt-2">
              Not registered yet?
              <Link href={"/register"} className="underline text-pink-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layouts>
  );
};

export default login;
