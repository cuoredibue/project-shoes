import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";

const FooterComponent = () => {
  const [whichMenuIsOpen, setWhichOpen] = useState(null);

  return (
    <div>
      <div className=" lg:flex  lg:space-x-20 lg:justify-center bg-black text-white text-sm px-4 py-8 lg:space-y-0 space-y-8">
        <div className="space-y-4">
          <p>TROVA UN NEGOZIO</p>
          <p>NIKE JOURNAL</p>
          <p>DIVENTA MEMBER</p>
          <p>FEEDBACK</p>
          <p>CODICI PROMOZIONALI</p>
        </div>
        <div className="border border-gray-700 lg:border-0"></div>
        <div className="lg:flex lg:space-x-16 lg:space-y-0 space-y-10">
          <div className="flex lg:grid lg:justify-normal justify-between">
            <p className="lg:hidden">HAI BISOGNO DI AIUTO?</p>
            {(whichMenuIsOpen !== 1 && (
              <div>
                <p className="hidden lg:flex pb-2">HAI BISOGNO DI AIUTO?</p>
                <div className="hidden lg:grid  space-y-3 text-sm text-gray-500 ">
                  <p>Stato ordine</p>
                  <p>Spedizione e consegna</p>
                  <p>Resi</p>
                  <p>Opzioni di pagamento</p>
                </div>
                <button
                  className=" lg:hidden"
                  onClick={() => {
                    setWhichOpen(1);
                  }}
                >
                  +
                </button>
              </div>
            )) ||
              (whichMenuIsOpen === 1 && (
                <div>
                  <button
                    onClick={() => {
                      setWhichOpen(null);
                    }}
                  >
                    -
                  </button>
                </div>
              ))}
          </div>
          {whichMenuIsOpen === 1 && (
            <div className="animate-[enterFromTop_200ms] space-y-3 text-sm text-gray-500 ">
              <p>Stato ordine</p>
              <p>Spedizione e consegna</p>
              <p>Resi</p>
              <p>Opzioni di Pagamento</p>
              <p>Contatti</p>
              <div className="border border-gray-700"></div>
            </div>
          )}
          <div className="flex lg:grid lg:justify-items-normal justify-between">
            <p className="lg:hidden">INFORMARZIONI SU NIKE</p>
            {(whichMenuIsOpen !== 2 && (
              <div>
                <p className="hidden lg:flex pb-2">INFORMARZIONI SU NIKE</p>
                <div className="hidden lg:grid lg:justify-start space-y-3 text-sm text-gray-500 ">
                  <p>News</p>
                  <p>Lavora con noi</p>
                  <p>Investitori</p>
                  <p>Sostenibilità</p>
                </div>

                <button
                  className=" lg:hidden"
                  onClick={() => {
                    setWhichOpen(2);
                  }}
                >
                  +
                </button>
              </div>
            )) ||
              (whichMenuIsOpen === 2 && (
                <button
                  onClick={() => {
                    setWhichOpen(null);
                  }}
                >
                  -
                </button>
              ))}
          </div>
          {whichMenuIsOpen === 2 && (
            <div className="animate-[enterFromTop_300ms] space-y-3 text-sm text-gray-500 ">
              <p>News</p>
              <p>Lavora con noi</p>
              <p>Investitori</p>
              <p>Sostenibilità</p>
              <div className="border border-gray-700"></div>
            </div>
          )}

          <div className="flex lg:grid justify-between">
            <p className="lg:hidden">UNISCITI A NOI</p>
            {(whichMenuIsOpen !== 3 && (
              <div>
                <p className="hidden lg:flex pb-2">UNISCITI A NOI</p>
                <div className="hidden lg:grid space-y-3 text-sm text-gray-500 ">
                  <p>Nike app</p>
                  <p>Nike run club</p>
                  <p>Nike training club</p>
                  <p>SNKRS</p>
                </div>

                <button
                  className=" lg:hidden"
                  onClick={() => {
                    setWhichOpen(3);
                  }}
                >
                  +
                </button>
              </div>
            )) ||
              (whichMenuIsOpen === 3 && (
                <button
                  onClick={() => {
                    setWhichOpen(null);
                  }}
                >
                  -
                </button>
              ))}
          </div>
          {whichMenuIsOpen === 3 && (
            <div className="animate-[enterFromTop_300ms] space-y-3 text-sm text-gray-500 ">
              <p>Nike app</p>
              <p>Nike run club</p>
              <p>Nike training club</p>
              <p>SNKRS</p>
              <div className="border border-gray-700"></div>
            </div>
          )}
        </div>
        <div className="flex space-x-4">
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <p className="lg:hidden text-xs text-gray-400">© 2023 Mattia</p>
      </div>
      <p className="hidden lg:flex text-xs text-gray-400 bg-black justify-center lg:p-2">
        © 2023 Mattia
      </p>
    </div>
  );
};

export default FooterComponent;
