import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MobileMenuButton from "../components/MobileMenuButton";

const HeaderNavBar = () => {
  return (
    <div className="sticky top-0 z-20  h-12 bg-white flex justify-between items-center px-2">
      <Link href="/" className="font-bold hover:text-gray-600">
        CHE SCARPA!
      </Link>
      <div className=" space-x-3">
        <button className="hover:bg-gray-200 focus:bg-slate-200 rounded-full h-8 w-8">
          <ShoppingBagOutlinedIcon />
        </button>
        <button className="hover:bg-gray-200 rounded-full h-8 w-8">
          <SearchIcon />
        </button>
        <MobileMenuButton />
      </div>
    </div>
  );
};

export default HeaderNavBar;
