const CheckoutBottomBar = (props) => {
  const { totalToPay, checkoutItems } = props;

  return (
    <div className=" border-gray-200 border-t lg:border-none sm:px-8 px-4 py-10 space-y-3">
      <h2 className="text-xl">Riepilogo</h2>
      <div className="flex justify-between font-light">
        <p>Subtotale</p>
        <p>{totalToPay} €</p>
      </div>
      <div className="flex justify-between font-light">
        <p>Costi di spedizione </p>
        <p>Gratis</p>
      </div>

      <div className="flex justify-between lg:border-y-gray-200 lg:border-y lg:py-4">
        <p className="font-light">Totale</p>
        <p className="font-semibold">{totalToPay} €</p>
      </div>
      {checkoutItems.length > 0 && (
        <form action="/api/checkoutSession" method="POST">
          <div className="hidden lg:flex lg:relative p-4 lg:px-8 lg:py-0 xl:px-0 bg-white sticky bottom-0">
            <input
              type="hidden"
              name="obj"
              value={JSON.stringify(checkoutItems)}
            />
            <button
              type="submit"
              role="link"
              className="bg-black w-full text-white h-14 rounded-full "
            >
              Vai al pagamento
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutBottomBar;
