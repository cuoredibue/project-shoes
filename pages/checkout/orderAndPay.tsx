import HeaderNavBar from "@/components/headerNavbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FooterComponent from "@/components/footerComponent";
const OrderAndPay = () => {
  const aggiuntiAlCarrello = [1, 2, 3, 4, 5];

  return (
    <div>
      <HeaderNavBar />
      <div className="grid justify-center p-10 ">
        <div className="w-full text-center">
          <h1 className="text-2xl font-medium">Carrello</h1>
        </div>
        <div className="flex font-light space-x-2">
          <p className="text-gray-400 border-r border-gray-400 px-2">
            n. articoli
          </p>
          <p>totale da pagare</p>
        </div>
      </div>
      <div className="p-2">
        {aggiuntiAlCarrello.map((item, index) => {
          return (
            <div
              className="grid grid-cols-4 justify-items-center font-light  py-6 border-t  border-gray-200"
              key={index}
            >
              <div className="bg-gray-100 h-20 w-20">foto</div>

              <div className="col-span-2">
                <p className="font-medium ">Modello scarpa</p>
                <p className="text-gray-400">che tipo di scarpa</p>
                <p className="text-gray-400"> quantità</p>
                <p className="text-gray-400">taglia</p>
                <div className="pt-6 space-x-2">
                  <button>
                    <FavoriteBorderIcon />
                  </button>
                  <button>
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </div>

              <div className="-mr-2">euro tot </div>
            </div>
          );
        })}
      </div>

      <FooterComponent />
      <div className="p-4 bg-white sticky bottom-0">
        <button className="bg-black w-full text-white h-14 rounded-full ">
          Vai al pagamento
        </button>
      </div>
    </div>
  );
};

export default OrderAndPay;
