const CheckoutForm = (props) => {
  const { checkoutItems } = props;
  return (
    <form
      className="sticky bottom-0"
      action="/api/checkoutSession"
      method="POST"
    >
      <div className="lg:hidden p-4 lg:px-8 lg:py-0 bg-white w-full">
        <input type="hidden" name="obj" value={JSON.stringify(checkoutItems)} />
        <button
          type="submit"
          role="link"
          className="bg-black w-full text-white h-14 rounded-full "
        >
          Vai al pagamento
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
