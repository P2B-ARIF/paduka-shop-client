import Image from "next/image";
import monitor from "./../../../public/assets/monitor.jpg";
import wShoes from "./../../../public/assets/women-shoes.jpg";
import mShoes from "./../../../public/assets/men-shoes.jpg";
import wBag from "./../../../public/assets/women-bag.webp";
import { HiArrowNarrowRight } from "react-icons/hi";
import clock from "./../../../public/assets/clock.png";
import console from "./../../../public/assets/console.png";

const ShopByCategories = () => {
  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="flex items-center justify-between m-3">
          <h2 className="font-semibold">Shop By Category</h2>
          <button className="flex items-center font-semibold">
            All Category <HiArrowNarrowRight className="ml-5 text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <div>
            <div className="w-full h-[350px] rounded-xl overflow-hidden">
              <Image
                className="w-[500px] object-cover object-left h-full rounded-xl"
                src={monitor}
                width={700}
                height={400}
                alt="products image"
              />
            </div>
            <h3 className=" text-lg font-semibold ml-2">Monitor</h3>
          </div>
          <div>
            <div className="w-full h-[350px] rounded-xl overflow-hidden">
              <Image
                className="w-[500px] object-cover object-left h-full rounded-xl"
                src={wShoes}
                width={700}
                height={400}
                alt="products image"
              />
            </div>
            <h3 className=" text-lg font-semibold ml-2">Monitor</h3>
          </div>
          <div>
            <div className="w-full h-[350px] rounded-xl overflow-hidden">
              <Image
                className="w-[500px] object-cover object-left h-full rounded-xl"
                src={mShoes}
                width={700}
                height={400}
                alt="products image"
              />
            </div>
            <h3 className=" text-lg font-semibold ml-2">Monitor</h3>
          </div>
          <div>
            <div className="w-full h-[350px] rounded-xl overflow-hidden">
              <Image
                className="w-[500px] object-cover object-left h-full rounded-xl"
                src={wBag}
                width={700}
                height={400}
                alt="products image"
              />
            </div>
            <h3 className=" text-lg font-semibold ml-2">Monitor</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="bg-blue-100 rounded-lg flex items-center justify-between">
            <div className="p-3 ">
              <h2 className="font-semibold text-lg">Amazing New Products</h2>
              <p className="my-1 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="text-sm flex items-center">
                See Details <HiArrowNarrowRight className="ml-5 text-lg" />
              </a>
            </div>
            <div className="w-[120px] h-[100px] overflow-hidden">
              <Image
                className="w-[150px] h-[120px] relative top-[-10px] right-[-20px] object-cover"
                src={clock}
                alt="clock image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg flex items-center justify-between">
            <div className="p-3 ">
              <h2 className="font-semibold text-lg">Deals & Promotions</h2>
              <p className="my-1 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="text-sm flex items-center">
                See Details <HiArrowNarrowRight className="ml-5 text-lg" />
              </a>
            </div>
            <div className="w-[150px] h-[100px] overflow-hidden">
              <Image
                className="w-[150px] h-[120px] relative top-[0px] right-[-30px] object-cover"
                src={console}
                alt="clock image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
