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
import Image from "next/image";
const ManShoes = () => {
  const [allShoes, setAllShoes] = useState([]);
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
            gender="Uomo"
          />
        </div>

        <LastModelPanel
          shoesModel="Pegasus 40"
          promoTitle={promoTitle}
          description={description}
        />
        <div className="2xl:grid 2xl:grid-cols-11 3xl:grid-cols-5 4xl:grid-cols-11 pb-8 ">
          <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-3 3xl:col-start-2 4xl:col-span-5 4xl:col-start-4 space-y-2">
            <Image
              height={1800}
              width={1800}
              alt="NikePegasusUomo"
              src="https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/pegasusUomoPromo.png"
            />
          </div>

          <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-3 3xl:col-start-2 4xl:col-span-5 4xl:col-start-4 space-y-2">
            <p className="2xl:px-0 px-4 pt-12 text-2xl ">
              Trend della settimana
            </p>
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
      </div>
      <FooterComponent />
    </div>
  );
};

export default ManShoes;
