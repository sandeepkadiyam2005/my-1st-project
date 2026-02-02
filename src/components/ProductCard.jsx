const ProductCard = ({ product }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-48 items-center justify-center bg-forest-50">
        <img src={product.image} alt={product.title} className="h-28 w-28" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold text-forest-900">{product.title}</h3>
        <p className="text-sm text-slate-600">{product.description}</p>
        <button
          type="button"
          className="mt-auto w-fit rounded-full border border-forest-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-forest-700 transition group-hover:border-forest-500 group-hover:text-forest-900"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
