import Image from "next/image";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { useState } from "react";
import styles from "./../../../styles/home/offerCategory.module.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const OfferCategories = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const offerCategory = [
    {
      title: "Child Boys Shoe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnW0UvuV2I8Xr5PRN5-c4HGTrzfP8mOI1dg&usqp=CAU",
      discount: 15,
    },
    {
      title: "Men Shoe",
      image:
        "https://images.dsw.com/is/image/DSWShoes/525978_020_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
      discount: 20,
    },
    {
      title: "Men Shoe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUn8YPmlqlfv8qzgoI5rbNG8zOz8SsxVF5jQ&usqp=CAU",
      discount: 17,
    },
    {
      title: "Child Girls Shoe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsR0GvdXNkOuqrubUoFqWek7RK3MCktYLUp6i4ny45HP-u9y7tSwTQPxui6q0n8fM_mY&usqp=CAU",
      discount: 10,
    },
    {
      title: "Child Boys Shoe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0o4jl5OUh69K8CtWVzoCNk_7HOait8bmOtMCHBUqsS8PHvML9gwgTdyA5UoVq0UFaihw&usqp=CAU",
      discount: 15,
    },
    {
      title: "Women Shoe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oqrfevLJkVdZtJsVMMa-dCdE11aIYyW9rw&usqp=CAU",
      discount: 30,
    },
  ];

  if (end > offerCategory.length ) {
    setStart(0);
    setEnd(4);
  } 

  return (
    <section className="my-10 ">
      <div className={`flex items-center container mx-auto `}>
       <div className={styles.off_c_content}>
       {offerCategory.slice(start, end).map((item, i) => {
          return (
            <div key={i}  className={`${styles.off_c_card} `}>
              <div className={styles.image}>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="offer categories image"
              />
              </div>
              <div className={styles.details}>
                <h3 className={styles.off_c_title}>{item.title}</h3>
                <h4 className={`${styles.discount} text-sm`}>
                  Discount <span className="bg-transparent text-pink-500 font-semibold">{item.discount}</span>% OFF
                </h4>
              </div>
            </div>
          );
        })}

       </div>
        <div className="ml-2">
          <button
            onClick={() => {
              setStart(start + 1);
              setEnd(end + 1);
            }}
          >
            <AiFillLeftCircle className="text-3xl text-pink-500" />
          </button>
          <button
            onClick={() => {
              setStart(start - 1);
              setEnd(end - 1);
            }}
          >
            <AiFillRightCircle className="text-3xl text-pink-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferCategories;
