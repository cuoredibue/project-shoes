import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import FooterComponent from "@/components/footerComponent";
import BottomMenuExtraInfo from "../../components/addToCardBottomInfo";
import { useRouter } from "next/router";
import Image from "next/image";
import { error } from "console";
import { supabase } from "..";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    availableSizes,
  } = router.query;

  const imagesList = [img_url, img2_url, img3_url, img4_url];
  const [sizeSelected, setSizeSelected] = useState(null);
  const [notification, setNotification] = useState(null);

  const addShoesToCart = async () => {
    if (!sizeSelected) {
      console.log("seleziona prima la taglia");
      return;
    }
    const { data, error } = await supabase
      .from("shoesOrder")
      .insert({
        model,
        price,
        img_url,
        gender,
        size: sizeSelected,
        availableSizes,
      })
      .select();
    if (data) {
      console.log("aggiunto al carrello");
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
            <div key={index}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="snap-center h-[32rem] bg-top bg-cover w-screen "
              ></div>
            </div>
          );
        })}
      </div>
      <div className=" flex text-center justify-center mt-5 ">
        {" "}
        <p>Seleziona la taglia/misura</p>
      </div>
      {availableSizes && (
        <div className="grid grid-cols-3 p-5 gap-2 ">
          {availableSizes.map((size, index) => {
            return (
              <button
                onClick={() => {
                  setSizeSelected(size);
                }}
                key={index}
                className={
                  (sizeSelected === size &&
                    "h-12 w-30 bg-white border border-gray-800 rounded") ||
                  "h-12 w-30 bg-white border border-gray-200 rounded"
                }
              >
                EU {size}
              </button>
            );
          })}
        </div>
      )}

      <div className="p-5 space-y-4">
        <button
          onClick={() => {
            addShoesToCart();
          }}
          className="bg-black text-white w-full h-14 rounded-full"
        >
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

{
  //alternativa image next-js
  /* <div key={index} className=" space-y-4 pb-2 snap-center">
              <div className=" bg-stone-100 sm:h-[30rem] h-[29rem] w-[23.5rem] sm:w-[24rem] ">
                <Image src={image} width={400} height={400} alt="shoes" />
              </div> */
}
