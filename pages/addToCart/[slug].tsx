import HeaderNavBar from "@/components/headerNavbar";
import PromoCarousel from "@/components/promoCarouselTopBar";
import FooterComponent from "@/components/footerComponent";
import BottomMenuExtraInfo from "../../components/addToCardBottomInfo";

const AddToCart = () => {
  const availableSizeList = [
    36, 36.5, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45,
  ];

  return (
    <div>
      <div className="sticky top-0 z-20">
        <HeaderNavBar />
      </div>

      <PromoCarousel />
      <div className="space-y-2 p-5 font-medium">
        <p className="text-orange-600">extra descripition</p>
        <h2 className="text-2xl">Nome Modello</h2>
        <p>Caratteristica modello</p>
        <p>prezzo</p>
      </div>
      <div className="h-[36rem] bg-slate-200">carosello prodotto singolo</div>
      <div className="flex space-x-2 mt-1 ">
        <div className="h-32 w-32 bg-slate-200 rounded">colore 1</div>
        <div className="h-32 w-32 bg-slate-200 rounded">colore 2</div>
      </div>
      <div className="grid grid-cols-3 p-5 gap-2 mt-10">
        {availableSizeList.map((size, index) => {
          return (
            <button
              key={index}
              className="h-12 w-30 bg-white border border-gray-200 rounded"
            >
              EU {size}
            </button>
          );
        })}
      </div>
      <div className="p-5 space-y-4">
        <button className="bg-black text-white w-full h-14 rounded-full">
          Aggiungi al carrello
        </button>
        <button className="bg-white border border-gray-500  w-full h-14 rounded-full">
          Aggiungi ai preferiti
        </button>
      </div>
      <BottomMenuExtraInfo />
      <FooterComponent />
    </div>
  );
};
export default AddToCart;
