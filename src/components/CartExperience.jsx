const CartExperience = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * 500, 0);
  const delivery = cartItems.length > 0 ? 299 : 0;
  const discount = cartItems.length > 2 ? 250 : 0;
  const total = subtotal + delivery - discount;

  return (
    <section className="section-padding bg-[#eceff1]" id="cart-experience">
      <div className="container-width rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Cart</h2>
            <div className="mt-6 space-y-5">
              {cartItems.length === 0 && (
                <p className="text-sm text-slate-500">Add products from above to preview this cart layout.</p>
              )}
              {cartItems.map((item) => (
                <article key={item.id} className="flex gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-slate-100">
                    <img src={item.image} alt={item.title} className="h-16 w-16" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-xs text-slate-500">Variant: Eco Grade · Size: XL · Color: Natural</p>
                      </div>
                      <p className="text-sm font-semibold text-slate-900">₹{(item.quantity * 500).toLocaleString()}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <button type="button">♡</button>
                        <button type="button">🗑</button>
                      </div>
                      <div className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700">
                        Qty {item.quantity}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 p-5">
            <h3 className="text-2xl font-semibold text-slate-900">Order Summary</h3>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Delivery</span>
                <span>₹{delivery.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Discount</span>
                <span>-₹{discount.toLocaleString()}</span>
              </div>
              <div className="border-t border-slate-200 pt-3 text-base font-semibold text-slate-900 flex justify-between">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
            <a
              href="#payment-address"
              className="mt-6 block rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Checkout
            </a>
            <input
              type="text"
              placeholder="Use a promo code"
              className="mt-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CartExperience;
