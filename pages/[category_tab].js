import React, { useEffect } from "react";
import CategoryLists from "../Components/products/CategoryLists/CategoryLists";
import PriceRange from "../Components/products/PriceRange/PriceRange";
import Size from "../Components/products/Size/Size";
import Layouts from "../Layouts/Layouts";
import { useRouter } from "next/router";
import Products from "./../Components/products/Products/Products";
import { useState } from "react";

const category_tab = () => {
  const { query } = useRouter();
  const { category_tab } = query;
  const [products, setProducts] = useState([])

  const productsList = [
    {
      name: "Flats Shoes",
    },
    {
      name: "Heels",
    },
    {
      name: "Sandals",
    },
    {
      name: "Boots",
    },
  ];

    const womenShoesCollection = [
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
    {
      image:
        "http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/women_shoes_160x_1118f1f7-b10b-4a38-909f-5078dd1b46a8_1200x1200.jpg?v=1660202070",
      brand: "Nike",
      name: "Nike Air Max 2017 Id Women's Running Shoe",
      price: 1000,
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
        "http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/women_shoes_160x_1118f1f7-b10b-4a38-909f-5078dd1b46a8_1200x1200.jpg?v=1660202070",
      brand: "Nike",
      name: "Nike Air Max 2017 Id Women's Running Shoe",
      price: 1000,
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
        "http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/women_shoes_160x_1118f1f7-b10b-4a38-909f-5078dd1b46a8_1200x1200.jpg?v=1660202070",
      brand: "Nike",
      name: "Nike Air Max 2017 Id Women's Running Shoe",
      price: 1000,
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
        "http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/women_shoes_160x_1118f1f7-b10b-4a38-909f-5078dd1b46a8_1200x1200.jpg?v=1660202070",
      brand: "Nike",
      name: "Nike Air Max 2017 Id Women's Running Shoe",
      price: 1000,
    },
  ];

  
  useEffect(() => {
    fetch(`http://localhost:5000/getProducts`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Layouts title={category_tab}>
      <section className="container mx-auto flex gap-3 my-10">
        <div className="w-1/5">
          <div className="mb-3 border-2 border-pink-500 rounded-lg">
            <ul>
              {productsList.map((item, i) => (
                <CategoryLists key={i} productsList={item} />
              ))}
            </ul>
          </div>

          <PriceRange />
          <Size />
        </div>
        <div className="w-4/5 ">
          <section className="grid grid-cols-4 gap-3 justify-center">
            {womenShoesCollection.map((item, i) => (
              <Products key={i} shoesCollection={item} />
            ))}
          </section>
        </div>
      </section>
    </Layouts>
  );
};

export default category_tab;
