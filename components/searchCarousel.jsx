import Link from "next/link";
import Image from "next/image";

const SearchCarousel = (props) => {
  const {
    model,
    gender,
    type,
    price,
    img_url,
    specialty,
    img2_url,
    img3_url,
    img4_url,
    availableSizes,
    price_id,
    setSearchPanelIsActive,
  } = props;

  return (
    <Link
      href={{
        pathname: "/addToCart/model",
        query: {
          model,
          gender,
          type,
          price,
          img_url,
          specialty,
          img2_url,
          img3_url,
          img4_url,
          availableSizes,
          price_id,
        },
      }}
      className="image-item space-y-3 pb-2 snap-center"
    >
      <div
        onClick={() => {
          setSearchPanelIsActive(false);
        }}
        className=" bg-white sm:h-[15rem] h-[13rem] w-[11rem] sm:w-[12rem] "
      >
        <Image width={400} height={400} src={img_url} alt="shoes" />
      </div>
      <div className="">
        <p className=" font-medium truncate">{model}</p>
        <p className="text-gray-500">
          {type}-{gender}
        </p>
      </div>
    </Link>
  );
};

export default SearchCarousel;
