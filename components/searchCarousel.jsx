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
      className="space-y-4 pb-2 pl-4 snap-center"
    >
      <div
        onClick={() => {
          setSearchPanelIsActive(false);
        }}
        className=" bg-white sm:h-[15rem] h-[13rem] w-[11rem] sm:w-[12rem] "
      >
        <Image width={400} height={400} src={img_url} alt="shoes" />
      </div>
      <p className=" font-semibold text-xl">{model}</p>
    </Link>
  );
};

export default SearchCarousel;
