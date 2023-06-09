import Link from "next/link";

const ProductsPageSubMenu = (props) => {
  const { category1, category2, category3, category4, category5, gender } =
    props;
  return (
    <div className="lg:flex 2xl:px-8 lg:space-y-0 lg:justify-between 3xl:justify-around lg:items-center lg:pb-2 space-y-6">
      <h2 className="text-2xl">{gender}</h2>
      <div className=" -ml-2 pl-2 pb-2 lg:pb-0 bg-white flex text-black font-medium space-x-6  overflow-x-auto">
        <Link
          className="hover:text-gray-500"
          href={{
            pathname: "/shoesModels/fullList",
            query: {
              title: category1,
              gender,
              specialty: "specialty",
              type: "type",
            },
          }}
        >
          {category1}
        </Link>
        <Link
          className="hover:text-gray-500"
          href={{
            pathname: "/shoesModels/fullList",
            query: {
              title: category2,
              gender,
              specialty: "specialty",
              type: "type",
            },
          }}
        >
          {category2}
        </Link>
        <Link
          className="hover:text-gray-500"
          href={{
            pathname: "/shoesModels/fullList",
            query: {
              title: category3,
              gender,
              specialty: "specialty",
              type: "type",
            },
          }}
        >
          {category3}
        </Link>
        <Link
          className="hover:text-gray-500"
          href={{
            pathname: "/shoesModels/fullList",
            query: {
              title: category4,
              gender,
              specialty: "specialty",
              type: "type",
            },
          }}
        >
          {category4}
        </Link>
        <Link
          href={{
            pathname: "/shoesModels/fullList",
            query: {
              title: category5,
              gender,
              specialty: "specialty",
              type: "type",
            },
          }}
          className="whitespace-nowrap hover:text-gray-500"
        >
          {category5}
        </Link>
      </div>
      <div className="hidden lg:flex"></div>
    </div>
  );
};
export default ProductsPageSubMenu;
