import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import img from "./../../../public/assets/items-image.png";
import { AiFillStar } from "react-icons/ai";

const M_ShoesCollection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-2">
          <h3 className="font-semibold">Men Shoes Collection</h3>
          <h4 className="flex items-center">
            See More <BsArrowRight className="ml-3" />
          </h4>
        </div>

        <div className="grid grid-cols-5 gap-3 mt-4">
          <article className="bg-gray-100 grid grid-rows-2 rounded-md">
            <div className="m-auto">
              <Image
                className="w-4/5 mx-auto"
                src={img}
                width={400}
                height={400}
                alt="products collection"
              />
            </div>
            <div className="p-5">
              <p className="text-sm mb-2">Shoes Items</p>
              <h4 className="font-semibold">
                Nike Air Max 2017 Id Women's Running Shoe
              </h4>
              <div className="flex items-center my-2">
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
              </div>
              <span className="font-semibold">150.99 BDT</span>
            </div>
          </article>
          <article className="bg-gray-100 grid grid-rows-2 rounded-md">
            <div className="m-auto">
              <Image
                className="w-4/5 mx-auto"
                src={img}
                width={400}
                height={400}
                alt="products collection"
              />
            </div>
            <div className="p-5">
              <p className="text-sm mb-2">Shoes Items</p>
              <h4 className="font-semibold">
                Nike Air Max 2017 Id Women's Running Shoe
              </h4>
              <div className="flex items-center my-2">
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
              </div>
              <span className="font-semibold">150.99 BDT</span>
            </div>
          </article>
          <article className="bg-gray-100 grid grid-rows-2 rounded-md">
            <div className="m-auto">
              <Image
                className="w-4/5 mx-auto"
                src={img}
                width={400}
                height={400}
                alt="products collection"
              />
            </div>
            <div className="p-5">
              <p className="text-sm mb-2">Shoes Items</p>
              <h4 className="font-semibold">
                Nike Air Max 2017 Id Women's Running Shoe
              </h4>
              <div className="flex items-center my-2">
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
              </div>
              <span className="font-semibold">150.99 BDT</span>
            </div>
          </article>
          <article className="bg-gray-100 grid grid-rows-2 rounded-md">
            <div className="m-auto">
              <Image
                className="w-4/5 mx-auto"
                src={img}
                width={400}
                height={400}
                alt="products collection"
              />
            </div>
            <div className="p-5">
              <p className="text-sm mb-2">Shoes Items</p>
              <h4 className="font-semibold">
                Nike Air Max 2017 Id Women's Running Shoe
              </h4>
              <div className="flex items-center my-2">
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
              </div>
              <span className="font-semibold">150.99 BDT</span>
            </div>
          </article>
          <article className="bg-gray-100 grid grid-rows-2 rounded-md">
            <div className="m-auto">
              <Image
                className="w-4/5 mx-auto"
                src={img}
                width={400}
                height={400}
                alt="products collection"
              />
            </div>
            <div className="p-5">
              <p className="text-sm mb-2">Shoes Items</p>
              <h4 className="font-semibold">
                Nike Air Max 2017 Id Women's Running Shoe
              </h4>
              <div className="flex items-center my-2">
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
                <AiFillStar className="text-yellow-700" />
              </div>
              <span className="font-semibold">150.99 BDT</span>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
};

export default M_ShoesCollection;
