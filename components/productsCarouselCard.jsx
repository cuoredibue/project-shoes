import Link from "next/link";
import Image from "next/image";

const ProductsCarouselCard = (props) => {
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
      className="space-y-4 pb-2 pl-4 2xl:pl-0 snap-center"
    >
      <div className=" bg-gray-200 sm:h-[30rem] h-[27rem] w-[22rem] sm:w-[24rem]  ">
        <Image width={400} height={400} src={img_url} alt="shoes" />
      </div>
      <p className=" font-semibold text-xl">{model}</p>
    </Link>
  );
};

export default ProductsCarouselCard;
