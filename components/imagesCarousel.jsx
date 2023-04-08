import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import promoImage1 from "../Images/promoImage1.png";
import promoImage2 from "../Images/promoImage2.png";
import promoImage3 from "../Images/promoImage3.png";
import promoImage4 from "../Images/promoImage4.png";

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
        <div className="snap-center h-[48rem] bg-top bg-cover w-screen bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage1.png')]"></div>
      </div>
      <div>
        <div className="snap-center h-[48rem] bg-top bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage2.png')]"></div>
      </div>
      <div>
        <div className="snap-center h-[48rem] bg-top bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage3.png')]"></div>
      </div>
      <div>
        <div className="snap-center h-[48rem] bg-top bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage4.png')]"></div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
