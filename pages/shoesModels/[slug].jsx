import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "..";

//components
import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ShoesCard from "../../components/ShoesCard";
import FooterComponent from "@/components/footerComponent";

const ShoesModels = () => {
  const router = useRouter();
  const [initialQuery, setInitialQuery] = useState(router.query);
  const [allShoes, setAllShoes] = useState([]);
  const [typeOfShoe, setTypeOfShoe] = useState("");
  const { gender, title } = router.query;

  const setSupabaseFilterParams = () => {
    {
      title === "BestSeller" && setTypeOfShoe("specialty");
    }
    {
      title === "Novità" && setTypeOfShoe("specialty");
    }
    {
      title === "Running" && setTypeOfShoe("type");
    }
    {
      title === "Sneakers" && setTypeOfShoe("type");
    }
    {
      gender === "Kids" && setTypeOfShoe("type");
    }
    {
      title === "Tutte le scarpe" && setTypeOfShoe("");
    }
  };

  useEffect(() => {
    setSupabaseFilterParams();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("gender", gender)
      .eq(typeOfShoe, title);

    if (data) {
      setAllShoes(data);
      setInitialQuery(null);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [initialQuery]);

  return (
    <div className="grid grid-cols-1 h-screen place-content-between">
      <div>
        <HeaderNavBar />
        <PromoCarousel />
        <p className="font-medium 2xl:text-center text-lg w-full bg-white sticky top-0 p-4">
          {`${title} ${gender}`}
        </p>
        <div className="2xl:grid 2xl:grid-cols-7 ">
          <div className="grid gap-x-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:col-start-3 2xl:col-span-3">
            {allShoes.map((shoe, index) => {
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
              } = shoe;
              return (
                <ShoesCard
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
};

export default ShoesModels;
