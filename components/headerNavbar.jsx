import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MobileMenuButton from "../components/MobileMenuButton";
import SearchPanel from "../components/SearchPanel";
import { useState } from "react";

const HeaderNavBar = () => {
  const [searchPanelIsActive, setSearchPanelIsActive] = useState(false);

  return (
    <div className="  h-14 bg-white flex justify-between items-center px-2 2xl:px-8 3xl:justify-around">
      <Link href="/" className="font-bold hover:text-gray-500">
        CHE SCARPA!
      </Link>
      <div className="hidden font-medium lg:flex space-x-6">
        <Link
          className="hover:underline hover:underline-offset-4"
          href={{
            pathname: "/newShoes/all",
            query: {
              title: "Nuovi Arrivi Nike",
              specialty: "specialty",
            },
          }}
        >
          Novità e in evidenza
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href={{
            pathname: "/manShoes/all",
            query: {
              title: "Uomo",
              category1: "BestSeller",
              category2: "Novità",
              category3: "Sneakers",
              category4: "Running",
              category5: "Tutte le scarpe",
            },
          }}
        >
          Uomo
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href={{
            pathname: "/womanShoes/all",
            query: {
              title: "Donna",
              category1: "BestSeller",
              category2: "Novità",
              category3: "Sneakers",
              category4: "Running",
              category5: "Tutte le scarpe",
            },
          }}
        >
          Donna
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href={{
            pathname: "/kidsShoes/all",
            query: {
              title: "Kids",
              category1: "Sneakers",
              category2: "Calcio",
              category3: "Basket",
              category4: "PrimiPassi",
              category5: "Tutte le scarpe",
            },
          }}
        >
          Kids
        </Link>
      </div>
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
        <button
          onClick={() => setSearchPanelIsActive(true)}
          className="hover:bg-gray-200 rounded-full h-8 w-8 "
        >
          <SearchIcon />
        </button>
        {/* </Link> */}
        <SearchPanel
          searchPanelIsActive={searchPanelIsActive}
          setSearchPanelIsActive={setSearchPanelIsActive}
        />

        <MobileMenuButton />
      </div>
    </div>
  );
};

export default HeaderNavBar;
