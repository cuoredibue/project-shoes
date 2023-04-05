import { Inter } from "next/font/google";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
//components
import logo from "../Images/nike.jpg";
import HeaderNavBar from "../components/headerNavbar";
import PromoCarousel from "../components/promoCarouselTopBar";
import LastModelPanel from "../components/lastModelPanel";
import ProductsCarousel from "../components/productsCarousel";
import FooterComponent from "../components/footerComponent";
const inter = Inter({ subsets: ["latin"] });

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function Home() {
  return (
    <div className=" bg-white">
      <div className="sticky top-0 z-20">
        <HeaderNavBar />
      </div>
      <PromoCarousel />
      <LastModelPanel />
      <Image alt="shoes-image" src={logo} />
      <div className="p-6 space-y-2">
        <ProductsCarousel />
        <p className=" pt-12 text-2xl ">Esclusive SNKRS</p>
        <ProductsCarousel />
        <p className=" pt-12 text-2xl ">Altri articoli</p>
        <ProductsCarousel />
        <p className=" pt-12 text-2xl ">Acquista per sport</p>
        <ProductsCarousel />
      </div>
      <FooterComponent />
    </div>
  );
}
