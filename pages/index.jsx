import { Inter } from "next/font/google";
import { createClient } from "@supabase/supabase-js";
//components
import { airMaxPulse } from "../newModels/shoes";
import HeaderNavBar from "../components/headerNavbar";
import PromoCarousel from "../components/promoCarouselTopBar";
import LastModelPanel from "../components/lastModelPanel";
import ProductsCarousel from "../components/productsCarousel";
import FooterComponent from "../components/footerComponent";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function Home() {
  const [shoePromoComponent, setShoePromoComponent] = useState([]);
  const [newModels, setNewModels] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [running, setRunnig] = useState([]);
  const shoesCategory = ["Sneakers", "Running"];
  const shoesSpecialty = ["Novità", "BestSeller"];
  const { promoTitle, description } = airMaxPulse;

  const filterCategory = async (category) => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("type", category);
    if (data) {
      {
        category === "Sneakers" && setSneakers(data);
      }
      {
        category === "Running" && setRunnig(data);
      }
    }
    if (error) {
      console.log(error);
    }
  };

  const setCategory = () => {
    shoesCategory.map((item) => {
      filterCategory(item);
    });
  };

  useEffect(() => {
    setCategory();
  }, []);

  const filterSpecialty = async (specialty) => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("specialty", specialty);
    if (data) {
      {
        specialty === "Novità" && setNewModels(data);
      }
      {
        specialty === "BestSeller" && setBestSeller(data);
      }
    }
    if (error) {
      console.log(error);
    }
  };

  const setSpecialty = () => {
    shoesSpecialty.map((item) => {
      filterSpecialty(item);
    });
  };

  useEffect(() => {
    setSpecialty();
  }, []);

  return (
    <div className=" bg-white">
      <div className="sticky top-0 z-20">
        <HeaderNavBar />
      </div>
      <PromoCarousel />
      <LastModelPanel
        shoesModel="Air Max Pulse"
        promoTitle={promoTitle}
        description={description}
      />
      <div className="h-[19rem] sm:h-[32rem] lg:h-[38rem] lg:bg-center  2xl:h-[48rem] 3xl:h-[64rem] 4xl:h-[88rem] bg-center bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage3.png')]"></div>
      <div className="2xl:grid 2xl:grid-cols-11 3xl:grid-cols-9 4xl:grid-cols-5 py-6 mb-10 ">
        <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-7 3xl:col-start-2  4xl:col-span-3 4xl:col-start-2 space-y-2">
          <p className="pl-4 2xl:pl-0 pt-12 text-2xl ">Novità</p>
          <div className=" flex overflow-auto 2xl:space-x-4 snap-x snap-mandatory">
            {newModels.map((item, index) => {
              const {
                model,
                gender,
                type,
                price,
                img_url,
                img2_url,
                img3_url,
                img4_url,
                specialty,
                availableSizes,
                price_id,
              } = item;
              return (
                <ProductsCarousel
                  key={index}
                  model={model}
                  gender={gender}
                  type={type}
                  price={price}
                  img_url={img_url}
                  specialty={specialty}
                  img2_url={img2_url}
                  img3_url={img3_url}
                  img4_url={img4_url}
                  availableSizes={availableSizes}
                  price_id={price_id}
                />
              );
            })}
          </div>
        </div>
        <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-7 3xl:col-start-2  4xl:col-span-3 4xl:col-start-2 space-y-2">
          <p className="pl-4 2xl:pl-0 pt-12 text-2xl ">Bestseller</p>
          <div className="flex overflow-auto snap-x 2xl:space-x-4 snap-mandatory">
            {bestSeller.map((item, index) => {
              const {
                model,
                gender,
                type,
                price,
                img_url,
                img2_url,
                img3_url,
                img4_url,
                specialty,
                availableSizes,
                price_id,
              } = item;
              return (
                <ProductsCarousel
                  key={index}
                  model={model}
                  gender={gender}
                  type={type}
                  price={price}
                  img_url={img_url}
                  specialty={specialty}
                  img2_url={img2_url}
                  img3_url={img3_url}
                  img4_url={img4_url}
                  availableSizes={availableSizes}
                  price_id={price_id}
                />
              );
            })}
          </div>
        </div>
        <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-7 3xl:col-start-2  4xl:col-span-3 4xl:col-start-2 space-y-2">
          <p className="pl-4 2xl:pl-0 pt-12 text-2xl ">Sneakers</p>
          <div className="flex overflow-auto 2xl:space-x-4 snap-x snap-mandatory">
            {sneakers.map((item, index) => {
              const {
                model,
                gender,
                type,
                price,
                img_url,
                img2_url,
                img3_url,
                img4_url,
                specialty,
                availableSizes,
                price_id,
              } = item;
              return (
                <ProductsCarousel
                  key={index}
                  model={model}
                  gender={gender}
                  type={type}
                  price={price}
                  img_url={img_url}
                  specialty={specialty}
                  img2_url={img2_url}
                  img3_url={img3_url}
                  img4_url={img4_url}
                  availableSizes={availableSizes}
                  price_id={price_id}
                />
              );
            })}
          </div>
        </div>
        <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-7 3xl:col-start-2  4xl:col-span-3 4xl:col-start-2 space-y-2">
          <p className="pl-4 2xl:pl-0 pt-12 text-2xl ">Running</p>
          <div className="flex overflow-auto 2xl:space-x-4 snap-x snap-mandatory">
            {running.map((item, index) => {
              const {
                model,
                gender,
                type,
                price,
                img_url,
                img2_url,
                img3_url,
                img4_url,
                specialty,
                availableSizes,
                price_id,
              } = item;
              return (
                <ProductsCarousel
                  key={index}
                  model={model}
                  gender={gender}
                  type={type}
                  price={price}
                  img_url={img_url}
                  specialty={specialty}
                  img2_url={img2_url}
                  img3_url={img3_url}
                  img4_url={img4_url}
                  availableSizes={availableSizes}
                  price_id={price_id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
