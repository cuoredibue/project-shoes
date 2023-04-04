import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const HeaderNavBar = () => {
  return (
    <div className="h-12 bg-white flex justify-between items-center px-2">
      <p className="font-bold">CHE SCARPA!</p>
      <div className=" space-x-4">
        <button>
          <ShoppingBagOutlinedIcon />
        </button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <MenuOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default HeaderNavBar;
