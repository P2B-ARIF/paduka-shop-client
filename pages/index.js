import Header from "../Components/Home/Header/Header";
import OfferCategories from "../Components/Home/OfferCategories/OfferCategories";
import ShopByCategories from "../Components/Home/ShopByCategories/ShopByCategories";
import Banner from "../Components/Home/Banner/Banner";
import M_ShoesCollection from "../Components/Home/M_ShoesCollection/M_ShoesCollection";
import W_ShoesCollection from "../Components/Home/W_ShoesCollection/W_ShoesCollection";
import C_ShoesCollection from "./../Components/Home/C_ShoesCollection/C_ShoesCollection";
import GiftCollection from "../Components/Home/GiftCollection/GiftCollection";
import DiscountBanner from "../Components/Home/DiscountBanner/DiscountBanner";
import Layouts from "../Layouts/Layouts";
import React from "react";

// const poppins = Poppins({ weight: "400" }, { subsets: "poppins" });

export default function Home() {
  return (
    <Layouts title={"Home"}>
      <div className="container mx-auto">
        <Header />
        <OfferCategories />
        <ShopByCategories />
        <Banner />
        <M_ShoesCollection />
        <W_ShoesCollection />
        <C_ShoesCollection />
        <DiscountBanner />
        <GiftCollection />
      </div>
    </Layouts>
  );
}
