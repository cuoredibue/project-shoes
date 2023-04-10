import Link from "next/link";
import Image from "next/image";

const ShoesCard = (props) => {
  const {
    model,
    gender,
    type,
    price,
    img_url,
    img2_url,
    img3_url,
    img4_url,
    specialty,
    availableSizes,
  } = props;
  return (
    <Link
      href={{
        pathname: "/addToCart/thisModel",
        query: {
          model,
          gender,
          type,
          price,
          img_url,
          img2_url,
          img3_url,
          img4_url,
          specialty,
          availableSizes,
        },
      }}
    >
      <div className="bg-gray-100 h-[14rem] ">
        <Image src={img_url} width={800} height={800} alt={model} />
      </div>
      <div className="text-sm space-y-1 pt-2 pb-4">
        <p className="font-medium">{model}</p>
        <p className="text-gray-400">
          {type}-{gender}
        </p>
        <p className="font-medium">{price} €</p>
      </div>
    </Link>
  );
};

export default ShoesCard;
