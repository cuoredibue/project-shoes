import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ProductsSubMenu from "../../components/produtsPageSubMenu";
import ProductsCarousel from "@/components/productsCarousel";
import FooterComponent from "@/components/footerComponent";
import { useRouter } from "next/router";
const WomenShoes = () => {
  const router = useRouter();
  const { title, category1, category2, category3, category4, category5 } =
    router.query;

  return (
    <div>
      <HeaderNavBar />
      <PromoCarousel />
      <div className="px-6 space-y-6 mt-6">
        <div className="space-y-6 sticky top-0 z-30 pt-6 pb-2 px-4 -mx-4 bg-white">
          <p className="text-2xl ">{title}</p>
          <ProductsSubMenu
            category1={category1}
            category2={category2}
            category3={category3}
            category4={category4}
            category5={category5}
          />
        </div>

        <div className="h-72 w-72 bg-red-500">
          immagine uomo/donna/bambino ecc
        </div>
        <p className="  text-2xl">Trend della settimana</p>
        <ProductsCarousel />
        <p className="  text-2xl">Air Jordan</p>
        <ProductsCarousel />
        <p className="  text-2xl">Air Max</p>
        <ProductsCarousel />
      </div>
      <FooterComponent />
    </div>
  );
};

export default WomenShoes;
