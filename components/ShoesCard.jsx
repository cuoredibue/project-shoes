import Link from "next/link";
import Image from "next/image";

const ShoesCard = () => {
  return (
    <Link
      href={{
        pathname: "/addToCart/thisModel",
        query: { title: "model" },
      }}
    >
      <div className="bg-gray-100 h-[10rem] ">fotoscarpa</div>
      <div className="text-sm space-y-1 pt-2 pb-4">
        <p className="font-medium">Nome modello</p>
        <p className="text-gray-400">info prodotto</p>
        <p className="font-medium">€ tot</p>
      </div>
    </Link>
  );
};

export default ShoesCard;
