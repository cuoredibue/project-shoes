import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import ShoesCard from "../../components/ShoesCard";
import FooterComponent from "@/components/footerComponent";

const ShoesModels = () => {
  const models = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <HeaderNavBar />
      <PromoCarousel />
      <p className="font-medium text-lg w-full bg-white sticky top-0 p-2">
        Tipo di scarpa
      </p>
      <div className="grid gap-x-2 grid-cols-2">
        {models.map((item, index) => {
          return <ShoesCard key={index} />;
        })}
      </div>
      <FooterComponent />
    </div>
  );
};

export default ShoesModels;
