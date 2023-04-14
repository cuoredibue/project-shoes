import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesCarousel = () => {
  return (
    <div className="overflow-auto flex snap-x snap-mandatory">
      <div>
        <div className="snap-center h-[19rem] sm:h-[32rem] lg:bg-center xl:h-[38rem] 2xl:h-[68rem] bg-center bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage3.png')]"></div>
      </div>
      <div>
        <div className="hidden xl:flex snap-center h-[32rem] lg:bg-center xl:h-[38rem] 2xl:h-[64rem]  bg-center bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage4%201.png')]"></div>
        <div className="snap-center h-[19rem] sm:h-[32rem] xl:hidden bg-center bg-cover w-screen  bg-[url('https://nqxbbqcnglvcblwkqilb.supabase.co/storage/v1/object/public/foto/promoImage4.png')]"></div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
