import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProductsCarouselCard from "./productsCarouselCard";
const ShoesCarousel = (props) => {
  const { allShoes } = props;

  const slideWidth = 0.8; // 80% della larghezza del contenitore
  const sliderLeft = (id) => {
    let slider = document.getElementById(id);
    slider.scrollLeft -= slider.offsetWidth * slideWidth;
  };

  const sliderRight = (id) => {
    let slider = document.getElementById(id);
    slider.scrollLeft += slider.offsetWidth * slideWidth;
  };

  return (
    <div className="2xl:grid 2xl:grid-cols-11 3xl:grid-cols-9 4xl:grid-cols-5 py-6 mb-10 ">
      {allShoes.map((shoesList, index) => {
        const { title, category } = shoesList;
        return (
          <div
            key={index}
            className="2xl:col-span-9 2xl:col-start-2 3xl:col-span-7 3xl:col-start-2  4xl:col-span-3 4xl:col-start-2 space-y-2"
          >
            <div className="flex justify-between px-4 2xl:px-0 pt-12 ">
              <p className=" text-2xl ">{title}</p>
              <div className="hidden lg:flex space-x-4 pb-2">
                <button
                  onClick={() => {
                    sliderLeft(title);
                  }}
                  className="text-gray-500 h-16 w-16 rounded-full hover:bg-gray-300 bg-gray-100"
                >
                  <ArrowBackIosNewIcon />
                </button>

                <button
                  onClick={() => {
                    sliderRight(title);
                  }}
                  className="text-gray-500 h-16 w-16 rounded-full hover:bg-gray-300 bg-gray-100"
                >
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>

            <div
              id={title}
              className=" flex overflow-auto 2xl:space-x-4 scroll-smooth snap-x snap-mandatory"
            >
              {category.map((item, index) => {
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
      })}
    </div>
  );
};

export default ShoesCarousel;
