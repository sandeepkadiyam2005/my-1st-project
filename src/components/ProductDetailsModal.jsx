const ProductDetailsModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-2xl bg-forest-50 p-6">
            <img src={product.image} alt={product.title} className="h-40 w-40" />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
                  Product detail
                </p>
                <h3 className="text-2xl font-semibold text-forest-900">{product.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-forest-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700"
              >
                Close
              </button>
            </div>
            <p className="text-sm text-slate-600">{product.details}</p>
            <div className="rounded-2xl border border-forest-100 bg-forest-50/70 p-4 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-forest-800">SKU:</span> {product.sku}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-forest-800">Price:</span> {product.price}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="w-full rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
