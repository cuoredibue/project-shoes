import Image from "next/image";

const AddShoeCard = (props) => {
  const { specialty, model, gender, price, imagesList } = props;
  return (
    <>
      <div className="lg:hidden space-y-2 p-5 font-medium">
        <p className="text-orange-600">{specialty}</p>
        <h2 className="text-2xl">{model}</h2>
        <p>Scarpa {gender}</p>
        <p>{`${price} €`}</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:space-x-0 flex overflow-auto space-x-3 snap-x snap-mandatory">
        {imagesList.map((image, index) => {
          return (
            <Image
              loading="eager"
              key={index}
              alt="shoes"
              width={800}
              height={800}
              src={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default AddShoeCard;
