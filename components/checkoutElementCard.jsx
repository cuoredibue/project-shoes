import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
const CheckoutElementCard = (props) => {
  const {
    model,
    price,
    gender,
    size,
    img_url,
    availableSizes,
    modifiedSize,
    removeShoe,
    index,
    id,
  } = props;
  return (
    <div
      className="grid grid-cols-4 space-x-0 font-light  py-6 border-t sm:px-6 px-2 border-gray-200"
      key={index}
    >
      <div className="col-span-3 space-x-6 flex">
        <Image src={img_url} width={100} height={100} alt="shoes" />
        <div>
          <p className="font-medium ">{model}</p>
          <p className="text-gray-500">Scarpa-{gender}</p>

          <form
            className="text-gray-500"
            onChange={(e) => {
              const newSize = e.target.value;
              modifiedSize(newSize, id);
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
                removeShoe(id);
              }}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>

      <div className=" text-right">{price} €</div>
    </div>
  );
};

export default CheckoutElementCard;
