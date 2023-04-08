import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import FooterComponent from "@/components/footerComponent";
import BottomMenuExtraInfo from "../../components/addToCardBottomInfo";
import { useRouter } from "next/router";
import Image from "next/image";
import { error } from "console";
import { supabase } from "..";
import { useEffect, useState } from "react";

const AddToCart = () => {
  const router = useRouter();
  const {
    model,
    gender,
    type,
    price,
    img_url,
    specialty,
    img2_url,
    img3_url,
    img4_url,
    size,
  } = router.query;

  const imagesList = [img_url, img2_url, img3_url, img4_url];
  const availableSizeList = [
    36, 36.5, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45,
  ];

  return (
    <div>
      <button
        onClick={() => {
          console.log(availableSizeList);
        }}
      >
        click
      </button>
      <div className="sticky top-0 z-20">
        <HeaderNavBar />
      </div>
      <PromoCarousel />
      <div className="space-y-2 p-5 font-medium">
        <p className="text-orange-600">{specialty}</p>
        <h2 className="text-2xl">{model}</h2>
        <p>Scarpa-{gender}</p>
        <p>{`${price} €`}</p>
      </div>
      <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
        {imagesList.map((image, index) => {
          return (
            <div key={index} className=" space-y-4 pb-2 snap-center">
              <div className=" bg-stone-100 sm:h-[30rem] h-[29rem] w-[23.5rem] sm:w-[24rem] ">
                <Image src={image} width={400} height={400} alt="shoes" />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex text-center justify-center mt-5 ">
        {" "}
        <p>Seleziona la taglia/misura</p>
      </div>

      <div className="grid grid-cols-3 p-5 gap-2 ">
        {availableSizeList.map((size, index) => {
          return (
            <button
              key={index}
              className="h-12 w-30 bg-white border border-gray-200 rounded"
            >
              EU {size}
            </button>
          );
        })}
      </div>
      <div className="p-5 space-y-4">
        <button className="bg-black text-white w-full h-14 rounded-full">
          Aggiungi al carrello
        </button>
        <button className="bg-white border border-gray-500  w-full h-14 rounded-full">
          Aggiungi ai preferiti
        </button>
      </div>
      <BottomMenuExtraInfo />
      <FooterComponent />
    </div>
  );
};
export default AddToCart;
