import HeaderNavBar from "@/components/headerNavbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FooterComponent from "@/components/footerComponent";
import { supabase } from "..";
import { useEffect, useState } from "react";
import { Anybody } from "next/font/google";
import Image from "next/image";
import { it } from "node:test";
const OrderAndPay = () => {
  const [shoesList, setShoesList] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);

  const fetchData = async () => {
    const { data, error } = await supabase.from("shoesOrder").select();
    if (data) {
      setShoesList(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateTotalToPay = () => {
    const prices = shoesList.map((item) => {
      return item.price;
    });

    const sum = prices.reduce((a, b) => a + b, 0);
    setTotalToPay(sum);
  };

  useEffect(() => {
    calculateTotalToPay();
  }, [shoesList]);

  const removeShoe = async (img_url) => {
    const { error } = await supabase
      .from("shoesOrder")
      .delete()
      .eq("img_url", img_url);
    if (error) {
      console.log(error);
    }
    fetchData();
  };

  const modifiedSize = async (newSize, img_url) => {
    const { data, error } = await supabase
      .from("shoesOrder")
      .update({ size: newSize })
      .eq("img_url", img_url);
  };

  return (
    <div>
      <HeaderNavBar />
      <div className="grid justify-center p-10 ">
        <div className="w-full text-center">
          <h1 className="text-2xl font-medium">Carrello</h1>
        </div>
        <div className="flex font-light space-x-2">
          <p className="text-gray-500 border-r border-gray-400 px-2">
            {shoesList.length} articoli
          </p>
          <p>{totalToPay}</p>
        </div>
      </div>
      <div className="p-2">
        {shoesList.map((item, index) => {
          const { model, price, gender, size, img_url, availableSizes } = item;
          return (
            <div
              className="grid grid-cols-4 justify-items-center font-light  py-6 border-t  border-gray-200"
              key={index}
            >
              <div className=" h-[4rem] w-[4rem] mt-1 ">
                <Image src={img_url} width={150} height={150} alt="shoes" />
              </div>

              <div className="col-span-2 space-y-1.5">
                <p className="font-medium ">{model}</p>
                <p className="text-gray-500">Scarpa-{gender}</p>

                <form
                  className="text-gray-500"
                  onChange={(e) => {
                    const newSize = e.target.value;
                    const img_url = e.target.id;
                    modifiedSize(newSize, img_url);
                  }}
                >
                  <label htmlFor="size-select">Taglia/misura:</label>
                  <select id={img_url} name="country">
                    <option value={size}>{size}</option>
                    {availableSizes.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </form>

                <div className="pt-6 space-x-2">
                  <button>
                    <FavoriteBorderIcon />
                  </button>
                  <button
                    onClick={() => {
                      removeShoe(img_url);
                    }}
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </div>

              <div className="-mr-2">{price} €</div>
            </div>
          );
        })}
        <div className="px-2 border-gray-200 border-t py-10 space-y-3">
          <h2 className="text-xl">Riepilogo</h2>
          <div className="flex justify-between font-light">
            <p>Subtotale</p>
            <p>{totalToPay} €</p>
          </div>
          <div className="flex justify-between font-light">
            <p>Costi di spedizione </p>
            <p>Gratis</p>
          </div>
          <div className="flex justify-between">
            <p className="font-light">Totale</p>
            <p className="font-semibold">{totalToPay} €</p>
          </div>
        </div>
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
