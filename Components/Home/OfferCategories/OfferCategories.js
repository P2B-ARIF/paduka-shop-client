import Image from "next/image";
import image from "./../../../public/assets/ladies-bag.png";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const OfferCategories = () => {
  return (
    <section className="my-5 bg-pink-50">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center gap-3 w-[370px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt="offer categories image"
          />
          <div>
            <h3 className="text-xl font-medium">Ladies bag</h3>
            <h4>
              Discount <span>20% OFF</span>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[370px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt="offer categories image"
          />
          <div>
            <h3 className="text-xl font-medium">Ladies bag</h3>
            <h4>
              Discount <span>20% OFF</span>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[370px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt="offer categories image"
          />
          <div>
            <h3 className="text-xl font-medium">Ladies bag</h3>
            <h4>
              Discount <span>20% OFF</span>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[370px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt="offer categories image"
          />
          <div>
            <h3 className="text-xl font-medium">Ladies bag</h3>
            <h4>
              Discount <span>20% OFF</span>
            </h4>
          </div>
        </div>
        {/* <div className="flex items-center gap-3 w-[370px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt="offer categories image"
          />
          <div>
            <h3 className="text-xl font-medium">Ladies bag</h3>
            <h4>
              Discount <span>20% OFF</span>
            </h4>
          </div>
        </div> */}
        <div>
          <button >
            <AiFillRightCircle className="text-3xl text-pink-500" />
          </button>
          <button >
            <AiFillLeftCircle  className="text-3xl text-pink-500"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferCategories;
