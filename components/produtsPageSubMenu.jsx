import Link from "next/link";

const ProductsPageSubMenu = () => {
  return (
    <div className=" -ml-2 pl-2 bg-white flex text-black font-medium space-x-6 pb-2 overflow-x-auto">
      <Link
        href={{ pathname: "/shoesModels/fullList", query: { title: "Outlet" } }}
      >
        Outlet
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: "Sneakers" },
        }}
      >
        Sneakers
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: "Running" },
        }}
      >
        Running
      </Link>
      <Link
        href={{ pathname: "/shoesModels/fullList", query: { title: "Novità" } }}
      >
        Novità
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: "BestSeller" },
        }}
        className="whitespace-nowrap"
      >
        Best seller
      </Link>
    </div>
  );
};
export default ProductsPageSubMenu;
