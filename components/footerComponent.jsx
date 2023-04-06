import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";

const FooterComponent = () => {
  const [whichMenuIsOpen, setWhichOpen] = useState(null);

  return (
    <div className="bg-black text-white text-sm px-4 py-8 space-y-8">
      <div className="space-y-4">
        <p>TROVA UN NEGOZIO</p>
        <p>NIKE JOURNAL</p>
        <p>DIVENTA MEMBER</p>
        <p>FEEDBACK</p>
        <p>CODICI PROMOZIONALI</p>
      </div>
      <div className="border border-gray-700 "></div>
      <div className="space-y-10">
        <div className="flex justify-between">
          <p>HAI BISOGNO DI AIUTO?</p>
          {(whichMenuIsOpen !== 1 && (
            <button
              onClick={() => {
                setWhichOpen(1);
              }}
            >
              +
            </button>
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
            <p>Stato dell'ordine</p>
            <p>Spedizione e consegna</p>
            <p>Resi</p>
            <p>Opzioni di Pagamento</p>
            <p>Contatti</p>
            <div className="border border-gray-700"></div>
          </div>
        )}
        <div className="flex justify-between">
          <p>INFORMARZIONI SU NIKE</p>
          {(whichMenuIsOpen !== 2 && (
            <button
              onClick={() => {
                setWhichOpen(2);
              }}
            >
              +
            </button>
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

        <div className="flex justify-between">
          <p>UNISCITI A NOI</p>
          {(whichMenuIsOpen !== 3 && (
            <button
              onClick={() => {
                setWhichOpen(3);
              }}
            >
              +
            </button>
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
      <p className="text-xs text-gray-400">© 2023 Mattia</p>
    </div>
  );
};

export default FooterComponent;
