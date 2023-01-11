import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

const C_ShoesCollection = () => {
  const childrenCollection = [
    {
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 780,
    },
    {
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 780,
    },
    {
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 780,
    },
    {
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 780,
    },
    {
      image:
        "http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/women_shoes_160x_1118f1f7-b10b-4a38-909f-5078dd1b46a8_1200x1200.jpg?v=1660202070",
      brand: "Nike",
      name: "Nike Air Max 2017 Id Women's Running Shoe",
      price: 1000,
    },
    {
      image:
        "https://marmishoes.com/media/wysiwyg/Fall_Thumbnail_NewArrivals@3x.png",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 900,
    },
    {
      image:
        "https://static-01.daraz.com.bd/p/62ad756252954b937bdaa0c2444c5b17.jpg",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 1500,
    },
    {
      image:
        "https://www.merkis.com.bd/wp-content/uploads/2022/03/MG_5263-02.jpeg",
      brand: "Adidas",
      name: "Adidas Air Max 2017 Id Women's Running Shoe",
      price: 1200,
    },
  ];

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
            <div className=" gap-3 flex justify-center mr-[150px]">
              {childrenCollection.slice(0, 2).map((item, i) => (
                <article key={i} className="card__horizontal">
                  <div className="ch_image">
                    <Image
                      className=""
                      src={item.image}
                      width={400}
                      height={400}
                      alt="products collection"
                    />
                  </div>
                  <div className="ch_details">
                    <p>{item.brand}</p>
                    <h4>{item.name}</h4>
                    <div className="flex items-center">
                      <div className="flex items-center my-2">
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                      </div>
                      <span className="ch_price">{`${item.price} BDT`}</span>
                    </div>
                    <button>
                      <FaCartPlus />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center gap-3">
            {childrenCollection.slice(2, 5).map((item, i) => (
                <article key={i} className="card__horizontal">
                  <div className="ch_image">
                    <Image
                      className=""
                      src={item.image}
                      width={400}
                      height={400}
                      alt="products collection"
                    />
                  </div>
                  <div className="ch_details">
                    <p>{item.brand}</p>
                    <h4>{item.name}</h4>
                    <div className="flex items-center">
                      <div className="flex items-center my-2">
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                      </div>
                      <span className="ch_price">{`${item.price} BDT`}</span>
                    </div>
                    <button>
                      <FaCartPlus />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className=" gap-3 flex justify-center ml-[150px]">
            {childrenCollection.slice(5, 7).map((item, i) => (
                <article key={i} className="card__horizontal">
                  <div className="ch_image">
                    <Image
                      className=""
                      src={item.image}
                      width={400}
                      height={400}
                      alt="products collection"
                    />
                  </div>
                  <div className="ch_details">
                    <p>{item.brand}</p>
                    <h4>{item.name}</h4>
                    <div className="flex items-center">
                      <div className="flex items-center my-2">
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                      </div>
                      <span className="ch_price">{`${item.price} BDT`}</span>
                    </div>
                    <button>
                      <FaCartPlus />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* girls shoes collections */}

        <div className="mt-20 mb-2">
          <h3 className="font-bold text-center">Girls Shoes Collection</h3>
          <div className="grid grid-cols-3  justify-center gap-3 mt-3 ">
            <div className="grid grid-rows-2 gap-3 justify-center">
            {childrenCollection.slice(0, 2).map((item, i) => (
                <article key={i} className="card__horizontal">
                  <div className="ch_image">
                    <Image
                      className=""
                      src={item.image}
                      width={400}
                      height={400}
                      alt="products collection"
                    />
                  </div>
                  <div className="ch_details">
                    <p>{item.brand}</p>
                    <h4>{item.name}</h4>
                    <div className="flex items-center">
                      <div className="flex items-center my-2">
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                      </div>
                      <span className="ch_price">{`${item.price} BDT`}</span>
                    </div>
                    <button>
                      <FaCartPlus />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="">
            {
          childrenCollection.slice(4,5).map((item, i) =>  <article key={i} className="card__vertical">
          <div className="cv_image">
            <Image
              className="w-full"
              src={item.image}
              width={400}
              height={400}
              alt="products collection"
            />
          </div>
          <div className="cv_details">
            <p >{item.brand}</p>
            <h4 >
           {item.name}
            </h4>
            <div className="flex items-center my-2">
              <AiFillStar className="text-yellow-700" />
              <AiFillStar className="text-yellow-700" />
              <AiFillStar className="text-yellow-700" />
              <AiFillStar className="text-yellow-700" />
              <AiFillStar className="text-yellow-700" />
            </div>
            <span className="cv_price">{`${item.price} BDT`}</span>
            <button>
              <FaCartPlus/>
            </button>
          </div>
        </article>)
         }
            </div>

            <div className=" grid grid-rows-2 gap-3 justify-center">
            {childrenCollection.slice(0, 2).map((item, i) => (
                <article key={i} className="card__horizontal">
                  <div className="ch_image">
                    <Image
                      className=""
                      src={item.image}
                      width={400}
                      height={400}
                      alt="products collection"
                    />
                  </div>
                  <div className="ch_details">
                    <p>{item.brand}</p>
                    <h4>{item.name}</h4>
                    <div className="flex items-center">
                      <div className="flex items-center my-2">
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                        <AiFillStar className="text-yellow-700" />
                      </div>
                      <span className="ch_price">{`${item.price} BDT`}</span>
                    </div>
                    <button>
                      <FaCartPlus />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_ShoesCollection;
