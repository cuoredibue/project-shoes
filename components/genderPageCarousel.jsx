import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProductsCarouselCard from "./productsCarouselCard";

const GenderPageCarousel = (props) => {
  const { allShoes } = props;

  const slideWidth = 0.8; // 80% della larghezza del contenitore
  const sliderLeft = () => {
    let slider = document.getElementById("slider-2");
    slider.scrollLeft -= slider.offsetWidth * slideWidth;
  };

  const sliderRight = () => {
    let slider = document.getElementById("slider-2");
    slider.scrollLeft += slider.offsetWidth * slideWidth;
  };

  return (
    <div className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-3 3xl:col-start-2 4xl:col-span-5 4xl:col-start-4 space-y-2">
      <div className="flex justify-between px-4 2xl:px-0 pt-12 ">
        <p className="2xl:px-0 px-4 pt-12 text-2xl ">Trend della settimana</p>
        <div className="hidden lg:flex space-x-4 pb-2">
          <button
            onClick={sliderLeft}
            className="text-gray-500 h-16 w-16 rounded-full hover:bg-gray-300 bg-gray-100"
          >
            <ArrowBackIosNewIcon />
          </button>

          <button
            onClick={sliderRight}
            className="text-gray-500 h-16 w-16 rounded-full hover:bg-gray-300 bg-gray-100"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div
        id="slider-2"
        className="flex overflow-auto scroll-smooth space-x-3 snap-x snap-mandatory"
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
            <ProductsCarouselCard
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default GenderPageCarousel;
