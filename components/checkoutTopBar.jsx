const CheckoutTopBar = (props) => {
  const { totalToPay, shoesList } = props;
  return (
    <div className="grid justify-center lg:justify-start p-10 ">
      <div className="w-full text-center ">
        <h1 className="text-2xl font-medium">Carrello</h1>
      </div>
      <div className="flex lg:hidden font-light space-x-2">
        <p className="text-gray-500 border-r border-gray-400 px-2">
          {shoesList.length} articoli
        </p>
        <p>{totalToPay} €</p>
      </div>
    </div>
  );
};

export default CheckoutTopBar;
