import { Button } from "@material-tailwind/react";
import Image from "next/image";
import img from "./../../../public/assets/banner_image.png";

const Banner = () => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-2 mx-auto px-20 bg-blue-gray-100 items-center my-10">
        <div>
          <p className="text-sm ml-1 mb-2">Lorem, ipsum.</p>
          <h1 className="text-5xl font-bold">AMAZON DELIVERS TO YOU</h1>
          <p className="text-sm my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit?
          </p>
          <Button>See Shop</Button>
        </div>
        <div className="mx-auto">
          <Image
          className="h-[400px] object-cover object-top"
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
