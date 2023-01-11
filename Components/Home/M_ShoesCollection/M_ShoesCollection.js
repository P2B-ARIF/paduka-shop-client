import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import img from "./../../../public/assets/men-shoes.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

const M_ShoesCollection = () => {
  const menShoesCollection = [
    {
      image:
        "https://static-01.daraz.com.bd/p/8ee076737ef0ce6968d52338f5912875.jpg",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 750,
    },
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5fdfea07418a6547f71232ec/Allen-Edmonds-Courtside-Sneakers/960x0.jpg?height=924&width=711&fit=bounds",
      brand: "Nike",
      name: "Nike Air Max 2017 Id Women's Running Shoe",
      price: 1100,
    },
    {
      image:
        "https://static-01.daraz.com.bd/p/81ddfaf337000a5a6ff854efcc077be7.jpg",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 900,
    },
    {
      image:
        "https://static-01.daraz.com.bd/p/5ecf5b4eb910c9fb084f5518117a367a.jpg",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 500,
    },
    {
      image:
        "http://reviews.com.np/uploads/article/shoes-every-man-should-own/shoes-every-man-should-own.jpg",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 200,
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-2">
          <h3 className="s_title">Men Shoes Collection</h3>
          <button className="flex items-center text-sm font-semibold">
            See More{" "}
            <BsArrowRight className="ml-3 text-xl text-pink-500 font-semibold" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-3 mt-4">
          {menShoesCollection.map((item, i) => (
            <article key={i} className="card__vertical">
              <div className="cv_image">
                <Image
                  className=""
                  src={item.image}
                  width={400}
                  height={400}
                  alt="products collection"
                />
              </div>
              <div className="cv_details">
                <p>{item.brand}</p>
                <h4>{item.name}</h4>
                <div className="flex items-center my-2">
                  <AiFillStar className="text-yellow-700" />
                  <AiFillStar className="text-yellow-700" />
                  <AiFillStar className="text-yellow-700" />
                  <AiFillStar className="text-yellow-700" />
                  <AiFillStar className="text-yellow-700" />
                </div>
                <span className="cv_price">{`${item.price} BDT`}</span>
                <button>
                  <FaCartPlus />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default M_ShoesCollection;
