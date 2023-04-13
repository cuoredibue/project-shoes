import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AddToCartBottomInfo = () => {
  const [whichMenuIsOpen, setWhichOpen] = useState(null);
  const buttomMenu = [
    {
      title: "Taglia/misura e fit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscingehenderit in voluptate ",
      id: 1,
    },
    {
      title: "Spedizioni e resi gratuiti",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscingehenderit in voluptate ",
      id: 2,
    },
    {
      title: "Realizzazione",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscingehenderit in voluptate ",
      id: 3,
    },
    {
      title: "Recensioni",

      id: 4,
      rewiew: [
        {
          name: "Gaia",
          text: "Bellissime e molto comode, super consigliate",
          date: "14 mar 2022",
          rating: 4.5,
        },
        {
          name: "Marco",
          text: "Stilose e veramente comode, best buy!!!",
          date: "13 nov 2021",
          rating: 5,
        },
      ],
    },
  ];
  const extraInfo = "descrizione extra esempio";

  return (
    <div>
      {buttomMenu.map((item, index) => {
        const { title, description, id, rewiew } = item;

        return (
          <div key={index}>
            <div className="flex justify-between items-center p-5 border-gray-200 border-t">
              <p className="font-medium text-xl ">{title}</p>
              {(whichMenuIsOpen !== id && (
                <button
                  onClick={() => {
                    setWhichOpen(id);
                  }}
                >
                  <ExpandMoreIcon />
                </button>
              )) ||
                (whichMenuIsOpen === id && (
                  <button
                    onClick={() => {
                      setWhichOpen(null);
                    }}
                  >
                    <ExpandLessIcon />
                  </button>
                ))}
            </div>
            {whichMenuIsOpen === id && (
              <div className="px-5  pb-12 animate-[enterFromTop_200ms]">
                {description}

                {rewiew && (
                  <div>
                    media recensioni
                    {rewiew.map((item, index) => {
                      const { name, text, date, rating } = item;
                      return (
                        <div className="py-4 space-y-1" key={index}>
                          <p className="font-medium">{name}</p>
                          <div className="flex space-x-4 text-sm">
                            <p className="font-semibold">{rating} stelle</p>
                            <p className="text-gray-500">{date}</p>
                          </div>
                          <p>{text}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AddToCartBottomInfo;
