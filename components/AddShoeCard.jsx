const AddShoeCard = (props) => {
  const { specialty, model, gender, price, imagesList } = props;
  return (
    <>
      <div className="space-y-2 p-5 font-medium">
        <p className="text-orange-600">{specialty}</p>
        <h2 className="text-2xl">{model}</h2>
        <p>Scarpa {gender}</p>
        <p>{`${price} €`}</p>
      </div>
      <div className="flex overflow-auto space-x-3 snap-x snap-mandatory">
        {imagesList.map((image, index) => {
          return (
            <div key={index}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="snap-center h-[28rem] bg-center bg-cover w-screen "
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddShoeCard;
