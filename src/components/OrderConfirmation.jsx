const OrderConfirmation = ({ isConfirmed }) => {
  return (
    <section id="order-confirmation" className="section-padding bg-forest-50/70">
      <div className="container-width">
        <div className="mx-auto max-w-3xl rounded-3xl border border-forest-100 bg-white p-8 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            Order confirmation
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-forest-900 sm:text-4xl">
            {isConfirmed ? "Order confirmed" : "Awaiting confirmation"}
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            {isConfirmed
              ? "Thank you! Your order has been placed. Our logistics team will share the invoice and production schedule shortly."
              : "Complete payment to generate a confirmation. Your order summary will appear here once confirmed."}
          </p>
          <div className="mt-6 rounded-2xl bg-forest-50 px-6 py-4 text-sm text-forest-700">
            Need changes? Reach out at +91 98765 43210 or hello@econirva.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;
