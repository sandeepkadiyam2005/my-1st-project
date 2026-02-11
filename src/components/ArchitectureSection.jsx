const ArchitectureSection = () => {
  return (
    <section className="section-padding bg-[#ececec]" id="architecture">
      <div className="container-width rounded-[2rem] border border-slate-300 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Architecture inspiration</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Econirva Commerce Workflow</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500">Client Layer</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Login / Registration</li>
              <li>• Product Discovery</li>
              <li>• Cart & Checkout</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500">API Gateway</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Auth Service</li>
              <li>• Cart Service</li>
              <li>• Payment Service</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500">Business Core</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Pricing Engine</li>
              <li>• Order Processor</li>
              <li>• Dispatch Scheduler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500">Databases</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Customer DB</li>
              <li>• Orders DB</li>
              <li>• Compliance DB</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          Request flow: UI → API Gateway → Business Services → Databases → Response with order status and confirmation.
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
