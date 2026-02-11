const PaymentAddress = ({ onConfirmOrder }) => {
  return (
    <section id="payment-address" className="section-padding bg-[#f3f4f6]">
      <div className="container-width">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Shipping Details</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Title" defaultValue="Mr" />
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="First Name" />
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Last Name" />
          </div>
          <input className="mt-4 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Address" />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Country" defaultValue="India" />
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Zip Code" />
          </div>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">Payment Info</h3>
          <div className="mt-4 space-y-4">
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Card Holder's Name" />
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Card Number" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Expiry Date" defaultValue="08/28" />
              <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Security Code" defaultValue="890" />
            </div>
          </div>

          <button
            type="button"
            onClick={onConfirmOrder}
            className="mt-6 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentAddress;
