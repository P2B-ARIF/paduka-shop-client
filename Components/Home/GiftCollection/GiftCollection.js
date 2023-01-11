import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

const GiftCollection = () => {
  
  const giftCollection = [
    {
      image:
        "https://probonoaustralia.com.au/wp-content/uploads/2022/11/Presents.News_.png",
      brand: "Unknown",
      name: "Wedding Gift",
      price: 780,
    },
    {
      image:
        "https://lovingcrafts.in/wp-content/uploads/2022/02/lovingcrafts-dot-in-products-7.jpg",
      brand: "Adidas",
      name: "Birthday Gift",
      price: 780,
    },
    {
      image:
        "https://i1.fnp.com/images/pr/l/v20220706181839/timeless-love-red-roses-bouquet-chocolate-cake_1.jpg",
      brand: "Nike",
      name: "Married Anniversary",
      price: 1000,
    },
    {
      image:
        "https://chanjalsworldcom.files.wordpress.com/2021/09/71u8qnmrzxl._sl1500_.jpg?w=1500",
      brand: "Adidas",
      name: "Surprise Gift ",
      price: 900,
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/festive-christmas-new-year-background-colorful-gift-royalty-free-image-1668523051.jpg",
      brand: "Adidas",
      name: "Birthday Party",
      price: 1500,
    },
    {
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBnaWZ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      brand: "Adidas",
      name: "Gift To Fundamental",
      price: 1200,
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-2">
          <h3 className="s_title">Gift Collection</h3>
          <button className="flex items-center text-sm font-semibold">
            See More{" "}
            <BsArrowRight className="ml-3 text-xl text-pink-500 font-semibold" />
          </button>
        </div>

        <div className="grid grid-cols-6 gap-2 mt-4">
          {giftCollection.map((item, i) => (
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

export default GiftCollection;
