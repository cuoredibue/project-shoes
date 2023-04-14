import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesCarousel = () => {
  const settings = {
    waitForAnimate: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="overflow-auto flex snap-x snap-mandatory">
      <div>
        <div className="snap-center h-[20rem] lg:bg-center lg:h-[44rem] bg-top bg-cover w-screen bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage1.png')]"></div>
      </div>
      <div>
        <div className="snap-center h-[20rem] lg:bg-center lg:h-[36rem] bg-top bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage2.png')]"></div>
      </div>
      <div>
        <div className="snap-center h-[20rem] lg:bg-center lg:h-[36rem] bg-center bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage3.png')]"></div>
      </div>
      <div>
        <div className="snap-center h-[20rem] lg:bg-center lg:h-[36rem] bg-top bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage4.png')]"></div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
