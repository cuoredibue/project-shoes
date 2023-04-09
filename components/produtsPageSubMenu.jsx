import Link from "next/link";

const ProductsPageSubMenu = (props) => {
  const { category1, category2, category3, category4, category5 } = props;
  return (
    <div className=" -ml-2 pl-2 bg-white flex text-black font-medium space-x-6 pb-2 overflow-x-auto">
      <Link
        href={{ pathname: "/shoesModels/fullList", query: { title: "Outlet" } }}
      >
        {category1}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: "Sneakers" },
        }}
      >
        {category2}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: "Running" },
        }}
      >
        {category3}
      </Link>
      <Link
        href={{ pathname: "/shoesModels/fullList", query: { title: "Novità" } }}
      >
        {category4}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: "BestSeller" },
        }}
        className="whitespace-nowrap"
      >
        {category5}
      </Link>
    </div>
  );
};
export default ProductsPageSubMenu;
