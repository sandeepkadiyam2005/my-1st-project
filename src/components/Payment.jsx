const Payment = ({ cartItems, onConfirmOrder }) => {
  return (
    <section id="payment" className="section-padding bg-white">
      <div className="container-width grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            Payment
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-forest-900 sm:text-4xl">
            Secure your production slot
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Review your cart and confirm the order to lock pricing. Our team will follow up
            with a proforma invoice and dispatch timeline within 24 hours.
          </p>
          <div className="mt-6 rounded-2xl border border-forest-100 bg-forest-50/60 p-6">
            <h3 className="text-sm font-semibold text-forest-900">Order summary</h3>
            {cartItems.length === 0 ? (
              <p className="mt-3 text-sm text-slate-600">
                Your cart is empty. Add products to proceed with payment.
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm text-slate-600"
                  >
                    <div>
                      <p className="font-semibold text-forest-900">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.price}</p>
                    </div>
                    <span className="text-xs font-semibold text-forest-700">
                      Qty {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-lg font-semibold text-forest-900">Payment details</h3>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="cardName">
                Cardholder name
              </label>
              <input
                id="cardName"
                type="text"
                placeholder="Name on card"
                className="mt-2 w-full rounded-xl border border-forest-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="cardNumber">
                Card number
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                className="mt-2 w-full rounded-xl border border-forest-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="expiry">
                  Expiry
                </label>
                <input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  className="mt-2 w-full rounded-xl border border-forest-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="cvv">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="password"
                  placeholder="***"
                  className="mt-2 w-full rounded-xl border border-forest-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={onConfirmOrder}
              className="w-full rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-700"
              disabled={cartItems.length === 0}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Payment;
