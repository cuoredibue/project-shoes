const ProductsCarousel = () => {
  const listaScarpe = [1, 2, 3, 4, 5];

  return (
    <div className="flex overflow-x-auto p-6 space-x-3">
      {listaScarpe.map((item, index) => {
        return (
          <div className="space-y-4" key={index}>
            <div className="h-64 w-64 bg-gray-200">nike</div>
            <p className=" font-semibold text-xl">modello</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCarousel;
