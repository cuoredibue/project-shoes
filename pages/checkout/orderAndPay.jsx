import { supabase } from "..";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

//components
import HeaderNavBar from "@/components/headerNavbar";
import CheckoutTopBar from "../../components/checkoutTopBar";
import FooterComponent from "@/components/footerComponent";
import CheckoutElementCard from "../../components/checkoutElementCard";
import CheckoutBottomBar from "../../components/checkoutBottomBar";
import { TurnLeft } from "@mui/icons-material";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const OrderAndPay = () => {
  const [shoesList, setShoesList] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);
  const [pageIsLoad, setPageIsLoad] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("shoesOrder").select();
    if (data) {
      setShoesList(data);
    }
    if (error) {
      console.log(error);
    }
    setPageIsLoad(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const prepareToCheckout = () => {
    let list = shoesList.map((item) => {
      return { price: item.price_id, quantity: 1 };
    });

    setCheckoutItems(list);
  };
  useEffect(() => {
    prepareToCheckout();
  }, [pageIsLoad]);

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
      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-7">
        <div className="xl:col-start-2 xl:col-span-2 2xl:col-start-3">
          <CheckoutTopBar totalToPay={totalToPay} shoesList={shoesList} />
          <div className="p-2">
            {shoesList.map((item, index) => {
              const {
                model,
                price,
                gender,
                size,
                img_url,
                availableSizes,
                id,
              } = item;
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
          </div>
        </div>
        <div>
          <CheckoutBottomBar
            totalToPay={totalToPay}
            checkoutItems={checkoutItems}
          />
        </div>
        <form action="/api/checkoutSession" method="POST">
          <div className=" lg:hidden p-4 lg:px-8 lg:py-0 bg-white sticky bottom-0">
            <input
              type="hidden"
              name="obj"
              value={JSON.stringify(checkoutItems)}
            />
            <button
              type="submit"
              role="link"
              className="bg-black w-full text-white h-14 rounded-full "
            >
              Vai al pagamento
            </button>
          </div>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
};

export default OrderAndPay;
