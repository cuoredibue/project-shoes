import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import FooterComponent from "@/components/footerComponent";
import BottomMenuExtraInfo from "../../components/addToCardBottomInfo";
import { useRouter } from "next/router";
import { supabase } from "..";
import { useState } from "react";

// components
import AddToCartPanelToCheckout from "../../components/addToCartPanelToCheckout";
import SizeTable from "../../components/sizeTable";
import AddShoeCart from "../../components/AddShoeCard";

const AddToCart = () => {
  const router = useRouter();
  const {
    model,
    gender,
    price,
    type,
    img_url,
    specialty,
    img2_url,
    img3_url,
    img4_url,
    availableSizes,
    price_id,
  } = router.query;

  const imagesList = [img_url, img2_url, img3_url, img4_url];
  const [sizeSelected, setSizeSelected] = useState(null);
  const [sizeMissed, setSizeMissed] = useState(false);
  const [checkoutPanel, setCheckoutPanel] = useState(false);

  const addShoesToCart = async () => {
    if (!sizeSelected) {
      setSizeMissed(true);
      return;
    }
    const { data, error } = await supabase
      .from("shoesOrder")
      .insert({
        model,
        price,
        img_url,
        gender,
        size: sizeSelected,
        availableSizes,
        price_id,
      })
      .select();
    if (data) {
      setSizeMissed(false);
      handleClick();
    }
    if (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setCheckoutPanel(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setCheckoutPanel(false);
    }, 5000);
  };

  return (
    <div>
      <AddToCartPanelToCheckout
        gender={gender}
        model={model}
        type={type}
        sizeSelected={sizeSelected}
        price={price}
        checkoutPanel={checkoutPanel}
        setCheckoutPanel={setCheckoutPanel}
        img_url={img_url}
      />

      <div className="sticky top-0 z-20">
        <HeaderNavBar />
      </div>
      <PromoCarousel />
      <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:p-10 2xl:grid-cols-5 ">
        <div className="col-span-2 2xl:col-start-2">
          <AddShoeCart
            specialty={specialty}
            model={model}
            gender={gender}
            price={price}
            imagesList={imagesList}
          />
        </div>

        <div>
          <div className="hidden lg:grid space-y-2 -mt-2 px-5 mx-2 font-medium">
            <h2 className="text-2xl">{model}</h2>
            <p>Scarpa {gender}</p>
            <p>{`${price} €`}</p>
          </div>
          <SizeTable
            availableSizes={availableSizes}
            setSizeSelected={setSizeSelected}
            sizeSelected={sizeSelected}
            setSizeMissed={setSizeMissed}
            sizeMissed={sizeMissed}
          />

          <div className="p-5 space-y-4">
            <button
              onClick={() => {
                addShoesToCart();
              }}
              className="bg-black hover:bg-gray-500 text-white w-full h-14 rounded-full"
            >
              Aggiungi al carrello
            </button>
            <button className="bg-white border border-gray-500  w-full h-14 rounded-full">
              Aggiungi ai preferiti
            </button>
          </div>
          <BottomMenuExtraInfo />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};
export default AddToCart;
