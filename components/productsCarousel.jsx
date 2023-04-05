import Link from "next/link";
import { title } from "process";

const ProductsCarousel = () => {
  const listaScarpe = [1, 2, 3, 4, 5];

  return (
    <div className="flex overflow-x-auto  space-x-3">
      {listaScarpe.map((item, index) => {
        return (
          <Link
            href={{ pathname: "/addToCart/model", query: { title: "AirMax3" } }}
            className="space-y-4 pb-2"
            key={index}
          >
            <div className="h-64 w-64 bg-gray-200">nike</div>
            <p className=" font-semibold text-xl">modello</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsCarousel;
