const CheckoutBottomBar = (props) => {
  const { totalToPay } = props;

  return (
    <div className="px-2 border-gray-200 border-t py-10 space-y-3">
      <h2 className="text-xl">Riepilogo</h2>
      <div className="flex justify-between font-light">
        <p>Subtotale</p>
        <p>{totalToPay} €</p>
      </div>
      <div className="flex justify-between font-light">
        <p>Costi di spedizione </p>
        <p>Gratis</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Totale</p>
        <p className="font-semibold">{totalToPay} €</p>
      </div>
    </div>
  );
};

export default CheckoutBottomBar;
