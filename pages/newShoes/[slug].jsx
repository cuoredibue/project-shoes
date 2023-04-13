import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ShoesCard from "@/components/ShoesCard";
import FooterComponent from "@/components/footerComponent";
import { supabase } from "..";
import { useEffect, useState } from "react";
const NewModels = () => {
  const [newModels, setNewModels] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("specialty", "Novità");
    if (error) {
      console.log(error);
    }
    if (data) {
      setNewModels(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeaderNavBar />
      <PromoCarousel />
      <p className="font-medium text-lg w-full bg-white sticky top-0 p-4">
        Nuovi Arrivi Nike
      </p>
      <div className="grid gap-x-2 grid-cols-2">
        {newModels.map((shoe, index) => {
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

export default NewModels;