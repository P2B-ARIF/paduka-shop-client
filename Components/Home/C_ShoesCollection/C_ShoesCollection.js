import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import girlsImg from "./../../../public/assets/girls_shoes.png";
import boysImg from "./../../../public/assets/boys_shoes.png";
import { AiFillStar } from "react-icons/ai";

const C_ShoesCollection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h3 className="text-center text-2xl font-semibold">
          Children Shoes Collection
        </h3>

        {/* boys shoes collections */}
        <div className="mt-10 mb-2">
          <h3 className="font-bold text-center">Boys Shoes Collection</h3>
          <div className="grid grid-row-3 gap-3 mt-3 ">
            <div className=" gap-3 flex justify-center">
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="flex justify-center gap-3">
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
            </div>

            <div className=" gap-3 flex justify-center">
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
              <article className="p-4 bg-gray-100 flex max-w-[380px] justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={boysImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* girls shoes collections */}

        <div className="mt-20 mb-2">
          <h3 className="font-bold text-center">Girls Shoes Collection</h3>
          <div className="grid grid-cols-3  justify-center gap-3 mt-3 ">
            <div className="grid grid-rows-2 gap-3 justify-center">
              <article className="p-4 bg-gray-100 flex justify-center rounded-md">
                <div className="m-auto w-[200px] ">
                  <Image
                    className="mx-auto"
                    src={girlsImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
              <article className="p-4 bg-gray-100 flex justify-center rounded-md">
                <div className=" m-auto w-[200px]">
                  <Image
                    className="mx-auto"
                    src={girlsImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="">
              {/* <article className="bg-gray-100 grid grid-rows-2 justify-center rounded-md">
                <div className="m-auto object-contain">
                  <Image
                    className="mx-auto"
                    src={girlsImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center mr-5">
                    <AiFillStar className="text-yellow-700" />
                    <AiFillStar className="text-yellow-700" />
                    <AiFillStar className="text-yellow-700" />
                    <AiFillStar className="text-yellow-700" />
                    <AiFillStar className="text-yellow-700" />
                  </div>
                  <span className="font-semibold">150.99 BDT</span>
                </div>
              </article> */}
               <article className="bg-gray-100 grid grid-rows-2 rounded-md">
            <div className="m-auto w-[220px]">
              <Image
                className="w-4/5 mx-auto object-cover"
                src={girlsImg}
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

            <div className=" grid grid-rows-2 gap-3 justify-center">
              <article className="p-4 bg-gray-100 flex justify-center rounded-md">
                <div className=" m-auto  w-[200px]">
                  <Image
                    className="mx-auto"
                    src={girlsImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
              <article className="p-4 bg-gray-100 flex justify-center rounded-md">
                <div className=" m-auto  w-[200px]">
                  <Image
                    className="mx-auto"
                    src={girlsImg}
                    width={400}
                    height={400}
                    alt="products collection"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-sm">Shoes Items</p>
                  <h4 className="font-semibold">
                    Nike Air Max 2017 Id Women's Running Shoe
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                      <AiFillStar className="text-yellow-700" />
                    </div>
                    <span className="font-semibold">150.99 BDT</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_ShoesCollection;
