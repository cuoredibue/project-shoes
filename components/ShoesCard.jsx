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
      <Image src={img_url} width={300} height={300} alt={model} />

      <div className="text-sm space-y-1 pl-2 pt-2 pb-4">
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
