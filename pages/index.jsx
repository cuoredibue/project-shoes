import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

//components
import { airMaxPulse } from "../newModels/shoes";
import HeaderNavBar from "../components/headerNavbar";
import PromoCarousel from "../components/promoCarouselTopBar";
import LastModelPanel from "../components/lastModelPanel";
import ShoesCarousel from "../components/shoesCarousel";
import FooterComponent from "../components/footerComponent";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function Home() {
  const [newModels, setNewModels] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [running, setRunnig] = useState([]);
  const allShoes = [
    { category: newModels, title: "Novità" },
    { category: bestSeller, title: "Bestseller" },
    { category: sneakers, title: "Sneakers" },
    { category: running, title: "Running" },
  ];
  const shoesType = ["Sneakers", "Running"];
  const shoesSpecialty = ["Novità", "BestSeller"];
  const { promoTitle, description } = airMaxPulse;

  const filteredType = async (type) => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("type", type);
    if (data) {
      {
        type === "Sneakers" && setSneakers(data);
      }
      {
        type === "Running" && setRunnig(data);
      }
    }
    if (error) {
      console.log(error);
    }
  };

  const setShoesType = () => {
    shoesType.map((item) => {
      filteredType(item);
    });
  };

  useEffect(() => {
    setShoesType();
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
      <div className="h-[19rem] sm:h-[32rem] lg:h-[38rem] lg:bg-center  2xl:h-[48rem] 3xl:h-[64rem] 4xl:h-[88rem] bg-center bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage3.png')]" />
      <ShoesCarousel allShoes={allShoes} />
      <FooterComponent />
    </div>
  );
}
