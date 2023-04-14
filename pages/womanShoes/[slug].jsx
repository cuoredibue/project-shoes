import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ProductsSubMenu from "../../components/produtsPageSubMenu";
import ProductsCarousel from "@/components/productsCarousel";
import FooterComponent from "@/components/footerComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "..";
import LastModelPanel from "@/components/lastModelPanel";
import { nikePegasusDonna } from "@/newModels/shoes";
import Image from "next/image";
const WomanShoes = () => {
  const [allShoes, setAllShoes] = useState([]);
  const { promoTitle, description } = nikePegasusDonna;
  const router = useRouter();
  const { title, category1, category2, category3, category4, category5 } =
    router.query;

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("gender", "Donna");
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

  return (
    <div>
      <HeaderNavBar />
      <PromoCarousel />
      <div className="space-y-6 mt-6">
        <div className="space-y-6 sticky top-0 z-30 pt-4 pb-2 px-4  bg-white">
          <ProductsSubMenu
            category1={category1}
            category2={category2}
            category3={category3}
            category4={category4}
            category5={category5}
            gender="Donna"
          />
        </div>

        <LastModelPanel
          shoesModel="Pegasus Trail 4 GORE-TEX"
          promoTitle={promoTitle}
          description={description}
        />

        <Image
          className="w-screen mb-10"
          height={800}
          width={800}
          alt="nikePegasusDonna"
          src="https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoDonnaPegasus.png"
        />

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

export default WomanShoes;
