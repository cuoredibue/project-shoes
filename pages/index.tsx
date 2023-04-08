import { Inter } from "next/font/google";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

//components
import ImageCarousel from "../components/imagesCarousel";
import logo from "../Images/nike.jpg";
import HeaderNavBar from "../components/headerNavbar";
import PromoCarousel from "../components/promoCarouselTopBar";
import LastModelPanel from "../components/lastModelPanel";
import ProductsCarousel from "../components/productsCarousel";
import FooterComponent from "../components/footerComponent";
import { useEffect, useState } from "react";
import { error } from "console";
import { Category } from "@mui/icons-material";
const inter = Inter({ subsets: ["latin"] });

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function Home() {
  const [allShoes, setAllShoes] = useState([]);
  const [newModels, setNewModels] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [running, setRunnig] = useState([]);
  const shoesCategory = ["Sneakers", "Running"];
  const shoesSpecialty = ["Novità", "BestSeller"];

  const fetchData = async () => {
    const { data, error } = await supabase.from("scarpe").select();
    if (data) {
      setAllShoes(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <LastModelPanel />

      <ImageCarousel />
      <div className="p-6 space-y-2">
        <p className=" pt-12 text-2xl ">Novità</p>
        <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
          {newModels.map((item, index) => {
            const { model, gender, type, price, img_url } = item;
            return (
              <ProductsCarousel
                key={index}
                model={model}
                gender={gender}
                type={type}
                price={price}
                img_url={img_url}
              />
            );
          })}
        </div>
        <p className=" pt-12 text-2xl ">Bestseller</p>
        <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
          {bestSeller.map((item, index) => {
            const { model, gender, type, price, img_url } = item;
            return (
              <ProductsCarousel
                key={index}
                model={model}
                gender={gender}
                type={type}
                price={price}
                img_url={img_url}
              />
            );
          })}
        </div>
        <p className=" pt-12 text-2xl ">Sneakers</p>
        <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
          {sneakers.map((item, index) => {
            const { model, gender, type, price, img_url } = item;
            return (
              <ProductsCarousel
                key={index}
                model={model}
                gender={gender}
                type={type}
                price={price}
                img_url={img_url}
              />
            );
          })}
        </div>
        <p className=" pt-12 text-2xl ">Running</p>
        <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
          {running.map((item, index) => {
            const { model, gender, type, price, img_url } = item;
            return (
              <ProductsCarousel
                key={index}
                model={model}
                gender={gender}
                type={type}
                price={price}
                img_url={img_url}
              />
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
