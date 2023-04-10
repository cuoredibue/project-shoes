import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ShoesCard from "../../components/ShoesCard";
import FooterComponent from "@/components/footerComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "..";

const ShoesModels = () => {
  const router = useRouter();
  const [initialQuery, setInitialQuery] = useState(router.query);
  const [allShoes, setAllShoes] = useState([]);
  const [typeOfShoe, setTypeOfShoe] = useState();
  const { gender, title } = router.query;

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("gender", gender);

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
    <div>
      <HeaderNavBar />
      <PromoCarousel />
      <p className="font-medium text-lg w-full bg-white sticky top-0 p-2">
        {`${title}-${gender}`}
      </p>
      <div className="grid gap-x-2 grid-cols-2">
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
            />
          );
        })}
      </div>
      <FooterComponent />
    </div>
  );
};

export default ShoesModels;
