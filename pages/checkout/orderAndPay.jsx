import { supabase } from "..";
import { useEffect, useState } from "react";

//components
import HeaderNavBar from "@/components/headerNavbar";
import CheckoutTopBar from "../../components/checkoutTopBar";
import FooterComponent from "@/components/footerComponent";
import CheckoutElementCard from "../../components/checkoutElementCard";
import CheckoutBottomBar from "../../components/checkoutBottomBar";

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

  const removeShoe = async (id) => {
    const { error } = await supabase.from("shoesOrder").delete().eq("id", id);
    if (error) {
      console.log(error);
    }
    fetchData();
  };

  const modifiedSize = async (newSize, id) => {
    const { data, error } = await supabase
      .from("shoesOrder")
      .update({ size: newSize })
      .eq("id", id);
  };

  return (
    <div>
      <HeaderNavBar />
      <CheckoutTopBar totalToPay={totalToPay} shoesList={shoesList} />
      <div className="p-2">
        {shoesList.map((item, index) => {
          const { model, price, gender, size, img_url, availableSizes, id } =
            item;
          return (
            <CheckoutElementCard
              key={index}
              model={model}
              price={price}
              gender={gender}
              size={size}
              img_url={img_url}
              availableSizes={availableSizes}
              modifiedSize={modifiedSize}
              index={index}
              removeShoe={removeShoe}
              id={id}
            />
          );
        })}

        <CheckoutBottomBar totalToPay={totalToPay} />
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
