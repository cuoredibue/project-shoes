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
    <div className="h-screen bg-white">
      <HeaderNavBar />

      <PromoCarousel />

      <LastModelPanel />
      <Image alt="shoes-image" src={logo} />

      <ProductsCarousel />
      <p className="px-6 pt-6 text-2xl ">Esclusive SNKRS</p>
      <ProductsCarousel />
      <p className="px-6 pt-6 text-2xl ">Altri articoli</p>
      <ProductsCarousel />
      <p className="px-6 pt-6 text-2xl ">Acquista per sport</p>
      <ProductsCarousel />
      <FooterComponent />
    </div>
  );
}
