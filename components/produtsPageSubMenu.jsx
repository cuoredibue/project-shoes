import Link from "next/link";

const ProductsPageSubMenu = (props) => {
  const { category1, category2, category3, category4, category5, gender } =
    props;
  return (
    <div className=" -ml-2 pl-2 bg-white flex text-black font-medium space-x-6 pb-2 overflow-x-auto">
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: category1, gender },
        }}
      >
        {category1}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: category2, gender },
        }}
      >
        {category2}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: category3, gender },
        }}
      >
        {category3}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: category4, gender },
        }}
      >
        {category4}
      </Link>
      <Link
        href={{
          pathname: "/shoesModels/fullList",
          query: { title: category5, gender },
        }}
        className="whitespace-nowrap"
      >
        {category5}
      </Link>
    </div>
  );
};
export default ProductsPageSubMenu;
