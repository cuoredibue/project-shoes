import { Inter } from "next/font/google";
import { createClient } from "@supabase/supabase-js";
//components
import { airMaxPulse } from "../newModels/shoes";
import ImageCarousel from "../components/imagesCarousel";
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
      <ImageCarousel />
      <div className="py-6 space-y-2">
        <p className="pl-4 pt-12 text-2xl ">Novità</p>
        <div className="flex overflow-auto snap-x snap-mandatory">
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
              />
            );
          })}
        </div>
        <p className="pl-4  pt-12 text-2xl ">Bestseller</p>
        <div className="flex overflow-auto snap-x snap-mandatory">
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
              />
            );
          })}
        </div>
        <p className="pl-4  pt-12 text-2xl ">Sneakers</p>
        <div className="flex overflow-auto snap-x snap-mandatory">
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
              />
            );
          })}
        </div>
        <p className="pl-4  pt-12 text-2xl ">Running</p>
        <div className="flex overflow-auto snap-x snap-mandatory">
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
              />
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
