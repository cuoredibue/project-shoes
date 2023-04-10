import { supabase } from "@/pages";
import Link from "next/link";
import { useEffect, useState } from "react";

const LastModelPanel = (props) => {
  const { promoTitle, description, shoesModel } = props;
  const [promoShoe, setPromoShoe] = useState({});
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
  } = promoShoe;

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("scarpe")
      .select()
      .eq("model", shoesModel);
    if (error) {
      console.log(error);
    }
    if (data) {
      setPromoShoe(data[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-2 py-6 space-y-4 bg-white text-center">
      <h2 className="font-semibold">Novità</h2>
      <h1 className="font-black text-5xl tracking-tighter">{promoTitle}</h1>
      <p>{description}</p>
      <Link
        href={{
          pathname: "/addToCart/BuyShoe",
          query: {
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
          },
        }}
      >
        <button className="bg-black rounded-full text-white px-6 mt-4 py-2">
          Acquista
        </button>
      </Link>
    </div>
  );
};

export default LastModelPanel;
