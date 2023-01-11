import { Input } from "@material-tailwind/react";
import img from "./../../public/assets/fillup.svg";
import Image from "next/image";
import styles from "./../../styles/dashboard/dashboardBody.module.css";


const login = () => {
  return (
    <>
      <div className={styles.login__field}>
        <div className="container mx-auto grid grid-cols-2 gap-5 items-center h-[100vh]">
          <div>
            <Image
              className="max-h-[60vh]"
              src={img}
              width={500}
              height={500}
              alt="signup photo"
            />
          </div>
          <div className="max-w-[500px]">
            <form>
              <h1 className="text-3xl font-bold">Dashboard Login</h1>

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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
