import { Righteous } from "@next/font/google";
import Image from "next/image";
import img from "./../../../public/assets/banner_image.png";
import styles from './../../../styles/home/offerCategory.module.css'

// const righteous = Righteous({
//   weight: "400",
//   subsets: ["Righteous"],
// });


const Banner = () => {
  return (
    <div className="bg-pink-500">
      <div className="container grid grid-cols-2 gap-2 mx-auto px-20 bg-pink-500 items-center my-10">
        <div className="bg-transparent text-white">
          <p className="text-sm ml-2  bg-transparent">Lorem, ipsum.</p>
          <h1 className={`${styles.text_banner} text-5xl font-bold bg-transparent`}>
            AMAZING ENVIRONMENT TO YOU
          </h1>
          <p className="text-sm my-5 bg-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit?
          </p>
          <button className="btn btn_reverse">See Shop</button>
        </div>
        <div className="mx-auto">
          <Image
            className="h-[400px] object-cover object-top bg-pink-500"
            src={img}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
