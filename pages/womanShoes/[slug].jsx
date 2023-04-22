import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "..";
import { nikePegasusDonna } from "@/newModels/shoes";
import Image from "next/image";

//components
import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ProductsSubMenu from "../../components/produtsPageSubMenu";
import FooterComponent from "@/components/footerComponent";
import LastModelPanel from "@/components/lastModelPanel";
import GenderPageCarousel from "@/components/genderPageCarousel";

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
    <div className="grid grid-cols-1 h-screen place-content-between">
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
          <div className="2xl:grid 2xl:grid-cols-11 3xl:grid-cols-5 4xl:grid-cols-11 pb-8 ">
            <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-3 3xl:col-start-2 4xl:col-span-5 4xl:col-start-4 space-y-2">
              <Image
                className=" mb-10"
                height={1800}
                width={1800}
                alt="nikePegasusDonna"
                src="https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoDonnaPegasus.png"
              />
            </div>
            <GenderPageCarousel allShoes={allShoes} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default WomanShoes;
