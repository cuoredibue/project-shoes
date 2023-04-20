const SizeTable = (props) => {
  const {
    availableSizes,
    setSizeSelected,
    sizeSelected,
    setSizeMissed,
    sizeMissed,
  } = props;
  return (
    <>
      <div className=" flex text-center justify-center mt-5 ">
        {" "}
        <p className={(sizeMissed === true && "text-red-500") || "text-black"}>
          Seleziona la taglia/misura
        </p>
      </div>
      {availableSizes && (
        <div
          className={
            (sizeMissed === true &&
              "grid grid-cols-3 p-5 border border-red-500 m-2 rounded-lg gap-2 ") ||
            "grid grid-cols-3 p-5  m-2 rounded-lg gap-2 "
          }
        >
          {availableSizes.map((size, index) => {
            return (
              <button
                onClick={() => {
                  setSizeSelected(size);
                  setSizeMissed(false);
                }}
                key={index}
                className={
                  (sizeSelected === size &&
                    "h-12 w-30  bg-white border border-gray-800 rounded") ||
                  "h-12 w-30 bg-white border border-gray-200 rounded"
                }
              >
                EU {size}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SizeTable;
