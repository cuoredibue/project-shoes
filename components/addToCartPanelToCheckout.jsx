import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";
import Image from "next/image";
const AddToCartPanelToCheckout = (props) => {
  const { checkoutPanel, model, type, sizeSelected, price, gender, img_url } =
    props;
  return (
    <div
      className={
        (checkoutPanel === true &&
          "z-40 fixed top-0 right-0 bg-black/60 w-screen h-screen") ||
        "hidden"
      }
    >
      <div className="space-y-6 bg-white p-4">
        <div className="flex justify-between">
          <div className="flex space-x-1">
            <CheckCircleIcon className="text-green-500 " />
            <p>Aggiunto al carrello</p>
          </div>
          <button>
            <ClearIcon className="text-gray-400" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Image width={100} height={100} src={img_url} alt={model} />
          <div className="font-light">
            <p>{`Nike ${model}`}</p>
            <p className="text-gray-400">{`${type}  ${gender}`}</p>
            <p className="text-gray-400">{`Taglia/Misura EU ${sizeSelected}`}</p>
            <p>{price} €</p>
          </div>
        </div>
        <Link href={{ pathname: "/checkout/orderAndPay" }}>
          <button className="rounded-full mt-6 bg-black text-white h-14 w-full">
            Visualizza Carrello
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddToCartPanelToCheckout;
