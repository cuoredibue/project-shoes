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
      <div className=" h-[4rem] w-[4rem] sm:h-[12rem] sm:w-[12rem]  lg:h-[6rem] lg:w-[6rem] xl:h[8rem] xl:w[8rem]  mt-1  ">
        <Image src={img_url} width={150} height={150} alt="shoes" />
      </div>

      <div className="col-span-2  space-y-1.5">
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

      <div className=" text-right">{price} €</div>
    </div>
  );
};

export default CheckoutElementCard;
