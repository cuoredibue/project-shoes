import { supabase } from "@/pages";
import { useEffect, useState } from "react";
import SearchCarousel from "./../components/searchCarousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SearchPanel = (props) => {
  const { searchPanelIsActive, setSearchPanelIsActive } = props;
  const [allShoes, setAllShoes] = useState([]);
  const [filteredList, setFilterdList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [shoeNotFound, setShoeNotFound] = useState(null);
  const fetchData = async () => {
    const { data, error } = await supabase.from("scarpe").select();
    if (data) {
      setAllShoes(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchPanelIsActive]);

  const lookingForAShoe = () => {
    if (!inputValue) {
      return;
    }
    const value = allShoes.filter((shoe) => {
      return (
        shoe.model.toLowerCase().includes(inputValue) ||
        shoe.gender.toLowerCase().includes(inputValue) ||
        shoe.type.toLowerCase().includes(inputValue)
      );
    });
    if (value.length === 0) {
      setShoeNotFound(`nessun risultato per "${inputValue}"`);
      setFilterdList(value);
    } else {
      setShoeNotFound(null);
      setFilterdList(value);
    }
  };

  useEffect(() => {
    lookingForAShoe();
  }, [inputValue]);

  const slideWidth = 0.8; // 80% della larghezza del contenitore
  const sliderLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft -= slider.offsetWidth * slideWidth;
  };

  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += slider.offsetWidth * slideWidth;
  };

  return (
    <div
      className={
        (searchPanelIsActive === true &&
          "z-40  fixed top-0 right-0 bg-white lg:bg-black/60 animate-[enterFromRight_300ms] lg:animate-[enterFromTop_0ms] w-screen h-screen") ||
        "hidden"
      }
    >
      <div className=" lg:animate-[enterFromTop_200ms] bg-white">
        <div className="flex  justify-between 2xl:justify-around  bg-white items-center px-4 lg:px-8 pt-4 pb-8">
          <div href="/" className="font-bold hidden lg:flex">
            CHE SCARPA!
          </div>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value.toLocaleLowerCase());
            }}
            className="lg:w-1/2 2xl:w-1/3 w-full px-2 mr-5 h-10 bg-stone-100 rounded-full"
            placeholder="cerca"
            type="text"
            autoFocus
          ></input>
          <button
            onClick={() => {
              setSearchPanelIsActive(false);
              setInputValue("");
            }}
            className="text-black hover:text-gray-500"
          >
            Annulla
          </button>
        </div>
        <div
          className={(inputValue && "hidden") || "text-center pb-2 space-y-2"}
        >
          <p className="text-sm text-gray-400">I termini più ricercati:</p>
          <div>
            <p>Air max</p>
            <p>Jordan</p>
            <p>Calcio</p>
            <p>Donna</p>
            <p>Sneakers</p>
          </div>
        </div>
        <div
          className={
            (!inputValue && "hidden") || "flex items-center justify-between "
          }
        >
          <button onClick={sliderLeft} className="text-gray-500 ">
            <ArrowBackIosNewIcon />
          </button>
          <div
            id="slider"
            className="flex space-x-4 bg-white overflow-auto snap-x snap-mandatory scroll-smooth"
          >
            {filteredList.map((item, index) => {
              const {
                model,
                gender,
                type,
                price,
                img_url,
                img2_url,
                img3_url,
                img4_url,
                specialty,
                availableSizes,
                price_id,
              } = item;
              return (
                <SearchCarousel
                  key={index}
                  model={model}
                  gender={gender}
                  type={type}
                  price={price}
                  img_url={img_url}
                  specialty={specialty}
                  img2_url={img2_url}
                  img3_url={img3_url}
                  img4_url={img4_url}
                  availableSizes={availableSizes}
                  price_id={price_id}
                  setSearchPanelIsActive={setSearchPanelIsActive}
                />
              );
            })}
          </div>
          <button onClick={sliderRight} className="text-gray-500">
            <ArrowForwardIosIcon />
          </button>
        </div>

        {shoeNotFound && (
          <div className="bg-white text-center p-4">
            <p>{shoeNotFound}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
