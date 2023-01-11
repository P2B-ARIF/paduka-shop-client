import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import clock from "./../../../public/assets/clock.png";
import console from "./../../../public/assets/console.png";
import styles from "./../../../styles/home/shopByCategories.module.css";
import { BiCategoryAlt } from "react-icons/bi";

const ShopByCategories = () => {
  
  const category = [
    {
      name: "Men Shoes",
      image:
        "https://www.rebelsport.co.nz/contentassets/c9845e9a78114d98825b38369c1c5d03/mens_footwear_8168725_heromob.jpg",
    },
    {
      name: "Women Shoes",
      image:
        "https://i.pinimg.com/originals/b0/5b/0e/b05b0e6e035d691b3adb5f266e04e4c1.jpg",
    },
    {
      name: "Children Shoes",
      image:
        "https://cf.shopee.sg/file/8fbd8a2d88d4a34b92ac4e554f2bd6b9",
    },
    {
      name: "Gift",
      image:
        "https://static.elfster.com/2022.1027.1643.3004/apps/vue/static/images/landing/home-create-exchange-desktop.jpg?11af53e2957ef9f9378a5faa64f394bf",
    },
  ];

  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="flex items-center justify-between">
          <h2 className="s_title">Shop By Category</h2>
          <button className="flex items-center font-semibold text-sm">
            All Category{" "}
            <HiArrowNarrowRight className="ml-5 text-xl text-pink-500" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          {category.map((item, i) => {
            return (
              <div className={styles.category_content}>
                <div className={styles.category_image_div}>
                  <Image
                    className={styles.category_img}
                    src={item.image}
                    width={500}
                    height={500}
                    alt="products image"
                  />
                </div>
                <button>
                  <BiCategoryAlt />
                  {item.name}
                </button>
              </div>
            );
          })}
          {/* <div>
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
          </div> */}
        </div>

        <div className="grid grid-cols-2 gap-5 my-10 ">
          <div className={`${styles.newOffer} rounded-lg flex items-center justify-between`}>
            <div className="p-3 bg-white">
              <h2 className="font-semibold text-lg bg-white">Amazing New Products</h2>
              <p className="my-1 text-sm text-blue-gray-700 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="text-blue-gray-700 bg-white text-sm flex items-center">
                See Details <HiArrowNarrowRight className=" bg-white ml-5 text-lg text-pink-500" />
              </a>
            </div>
            <div className=" bg-white w-[120px] h-[100px] overflow-hidden">
              <Image
                className=" bg-white w-[150px] h-[120px] relative top-[-10px] right-[-20px] object-cover"
                src={clock}
                alt="clock image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={`${styles.newOffer}  rounded-lg flex items-center justify-between`}>
            <div className="p-3  bg-white">
              <h2 className="font-semibold text-lg bg-white">Deals & Promotions</h2>
              <p className="my-1 text-sm text-blue-gray-700 bg-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="text-sm flex items-center text-blue-gray-700 bg-white">
                See Details <HiArrowNarrowRight className="ml-5 text-lg text-pink-500 bg-white" />
              </a>
            </div>
            <div className=" bg-white w-[150px] h-[100px] overflow-hidden">
              <Image
                className=" bg-white w-[150px] h-[120px] relative top-[0px] right-[-30px] object-cover"
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
