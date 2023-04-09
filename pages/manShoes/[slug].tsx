import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ProductsSubMenu from "../../components/produtsPageSubMenu";
import ProductsCarousel from "@/components/productsCarousel";
import FooterComponent from "@/components/footerComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "..";
import LastModelPanel from "@/components/lastModelPanel";
import { nikePegasusUomo } from "@/newModels/shoes";
const ManShoes = () => {
  const [allShoes, setAllShoes] = useState<any[]>([]);
  const [newModels, setNewModels] = useState<any[]>([]);
  const [bestSeller, setBestSeller] = useState<any[]>([]);
  const [sneakers, setSneakers] = useState<any[]>([]);
  const [running, setRunnig] = useState<any[]>([]);
  const shoesCategory = ["Sneakers", "Running"];
  const shoesSpecialty = ["Novità", "BestSeller"];
  const { promoTitle, description } = nikePegasusUomo;
  const router = useRouter();
  const { title, category1, category2, category3, category4, category5 } =
    router.query;

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("gender", "Uomo");
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

  const filterCategory = async (category: string) => {
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

  const filterSpecialty = async (specialty: string) => {
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
    <div>
      <HeaderNavBar />

      <PromoCarousel />
      <div className="space-y-6 mt-6">
        <div className="space-y-6 sticky top-0 z-30 pt-6 pb-2 px-4  bg-white">
          <p className="text-2xl ">{title}</p>
          <ProductsSubMenu
            category1={category1}
            category2={category2}
            category3={category3}
            category4={category4}
            category5={category5}
          />
        </div>
        <LastModelPanel promoTitle={promoTitle} description={description} />
        <div className="h-72 w-72 bg-red-500">
          immagine uomo/donna/bambino ecc
        </div>

        <div className="pb-8 space-y-2">
          <p className=" px-4 pt-12 text-2xl ">Trend della settimana</p>
          <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
            {allShoes.map((item, index) => {
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
      </div>
      <FooterComponent />
    </div>
  );
};

export default ManShoes;
