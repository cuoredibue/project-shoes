import { supabase } from "@/pages";
import { useEffect, useState } from "react";
import SearchCarousel from "./../components/searchCarousel";

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

  return (
    <div
      className={
        (searchPanelIsActive === true &&
          "z-40  fixed top-0 right-0 bg-white lg:bg-black/60 animate-[enterFromRight_300ms] lg:animate-[enterFromTop_0ms] w-screen h-screen") ||
        "hidden"
      }
    >
      <div className="lg:animate-[enterFromTop_200ms] bg-white">
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
          className={
            (inputValue && "hidden") ||
            "flex bg-white overflow-auto snap-x snap-mandatory"
          }
        >
          {allShoes.map((item, index) => {
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
        <div
          className={
            (inputValue &&
              "flex bg-white overflow-auto snap-x snap-mandatory") ||
            "hidden"
          }
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
