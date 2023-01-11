import Image from "next/image";
import db_Img1 from "./../../../public/assets/db1.jpg";
import db_Img2 from "./../../../public/assets/db2.jpg";
import db_Img3 from "./../../../public/assets/db3.jpg";
import styles from "./../../../styles/home/discountBanner.module.css";

const DiscountBanner = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-center font-semibold text-xl text-pink-500">
          Discount Offer __%
        </h1>

        <div
          className={`${styles.discount_content} my-5 grid grid-cols-3 gap-5 justify-center`}
        >
          <article className={styles.d_card}>
            <div className={styles.d_image}>
              <Image
                // className={styles.d_image}
                src={db_Img1}
                width={1000}
                height={1000}
                alt="discount banner image"
              />
            </div>
            <div className={styles.d_details}>
              <h1 className="text-2xl font-bold">Comfy Shoes for child </h1>
              <h5 className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                repudiandae!
              </h5>
              <p className="text-sm">Girls Shoes</p>
              <span className="font-bold text-yellow-800">20% Discount</span>
            </div>
          </article>
          <article className={styles.d_card}>
            <div className={styles.d_image}>
              <Image
                // className={styles.d_image}
                src={db_Img2}
                width={1000}
                height={1000}
                alt="discount banner image"
              />
            </div>
            <div className={styles.d_details}>
              <h1 className="text-2xl font-bold">Comfy Shoes for child </h1>
              <h5 className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                repudiandae!
              </h5>
              <p className="text-sm">Girls Shoes</p>
              <span className="font-bold text-yellow-800">20% Discount</span>
            </div>
          </article>
          <article className={styles.d_card}>
            <div className={styles.d_image}>
              <Image
                // className={styles.d_image}
                src={db_Img3}
                width={1000}
                height={1000}
                alt="discount banner image"
              />
            </div>
            <div className={styles.d_details}>
              <h1 className="text-2xl font-bold">Comfy Shoes for child </h1>
              <h5 className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                repudiandae!
              </h5>
              <p className="text-sm">Girls Shoes</p>
              <span className="font-bold text-yellow-800">20% Discount</span>
            </div>
          </article>

         
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
