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
        <p className=" font-semibold">FINO AL 30% DI SCONTO</p>
        <p className="text-sm font-light">
          sono iniziati gli sconti di primavera
        </p>
      </div>
      <div>
        <p className=" font-semibold">CONSEGNA E RESI GRATUITI</p>
        <p className="text-sm font-light">
          per i membri del club, consegna e resi gratuiti
        </p>
      </div>
    </Slider>
  );
};

export default PromoCarousel;
