import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PromoCarousel = () => {
  const settings = {
    waitForAnimate: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings} className="bg-stone-100  text-center p-2">
      <div>
        <p className=" font-semibold">Fino al 30% di sconto</p>
        <p>sono iniziati gli sconti di primavera (link)</p>
      </div>
      <div>
        <p className=" font-semibold">Consegna gratuita</p>
        <p>i membri del cluba consegna gratuita (link)</p>
      </div>
    </Slider>
  );
};

export default PromoCarousel;
