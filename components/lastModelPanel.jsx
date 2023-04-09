const LastModelPanel = (props) => {
  const { promoTitle, description } = props;
  return (
    <div className="px-2 py-6 space-y-4 bg-white text-center">
      <h2 className="font-semibold">Novità</h2>
      <h1 className="font-black text-5xl tracking-tighter">{promoTitle}</h1>
      <p>{description}</p>
      <button className="bg-black rounded-full text-white px-6 py-2">
        Acquista
      </button>
    </div>
  );
};

export default LastModelPanel;
