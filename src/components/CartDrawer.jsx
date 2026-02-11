const CartDrawer = ({ isOpen, onClose, cartItems, onIncrease, onDecrease, onRemove }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-forest-100 p-6">
          <h3 className="text-lg font-semibold text-forest-900">Your Cart</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-forest-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700"
          >
            Close
          </button>
        </div>
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {cartItems.length === 0 && (
              <p className="text-sm text-slate-600">
                Your cart is empty. Add products to start a quote.
              </p>
            )}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-forest-100 p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-forest-900">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.price}</p>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-semibold text-red-500"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="h-8 w-8 rounded-full border border-forest-200 text-sm text-forest-700"
                      onClick={() => onDecrease(item.id)}
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold text-forest-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="h-8 w-8 rounded-full border border-forest-200 text-sm text-forest-700"
                      onClick={() => onIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500">SKU: {item.sku}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-forest-100 p-6 space-y-3">
            <a
              href="#payment-address"
              onClick={onClose}
              className="block rounded-full bg-forest-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-forest-700"
            >
              Proceed to Payment
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="block rounded-full border border-forest-200 px-6 py-3 text-center text-sm font-semibold text-forest-700 transition hover:border-forest-500"
            >
              Request Quote Instead
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
