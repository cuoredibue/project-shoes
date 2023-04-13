import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MobileMenuButton from "../components/MobileMenuButton";

const HeaderNavBar = () => {
  return (
    <div className="  h-14 bg-white flex justify-between items-center px-2">
      <Link href="/" className="font-bold hover:text-gray-500">
        CHE SCARPA!
      </Link>
      <div className=" space-x-3">
        <Link
          href={{
            pathname: "/checkout/orderAndPay",
            query: {},
          }}
        >
          <button className="hover:bg-gray-200 focus:bg-slate-200 rounded-full h-8 w-8">
            <ShoppingBagOutlinedIcon />
          </button>
        </Link>

        <Link
          href={{
            pathname: "/search/findYourArticle",
            query: { title: "find" },
          }}
        >
          <button className="hover:bg-gray-200 rounded-full h-8 w-8 ">
            <SearchIcon />
          </button>
        </Link>

        <MobileMenuButton />
      </div>
    </div>
  );
};

export default HeaderNavBar;
