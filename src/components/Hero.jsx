const stats = [
  { label: "Monthly Capacity", value: "300 Tons" },
  { label: "Active SKUs", value: "120+" },
  { label: "Enterprise Clients", value: "45" }
];

const recentOrders = [
  { name: "Retail Carry Bag - D Cut", status: "In Production" },
  { name: "Grocery Compostable Roll", status: "QC Review" },
  { name: "Food Grade Packaging Film", status: "Dispatched" }
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#e8f3f2]">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-forest-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-100 blur-3xl" />

      <div className="section-padding container-width grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-forest-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-forest-700">
            Econirva Sustainable Systems
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Engineered for Nature
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Compostable Bags &amp; Sustainable Packaging Solutions with enterprise-grade
            quality controls, in-house operations, and reliable fulfillment.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              Get Quote
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/90 bg-white/80 p-4">
                <p className="text-xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-1 text-xs text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200">
            <div className="flex items-center justify-between bg-slate-900 px-5 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">Econirva Operations Console</p>
                <p className="text-xs text-slate-300">Live sustainability production board</p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                Live
              </span>
            </div>

            <div className="space-y-4 bg-slate-50 p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs text-slate-500">PLA Utilization</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">91%</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs text-slate-500">Batch Accuracy</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">99.2%</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs text-slate-500">Carbon Savings</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">14.8 t</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">Recent Orders</p>
                  <a href="#payment" className="text-xs font-semibold text-forest-700">
                    Open checkout
                  </a>
                </div>
                <div className="space-y-2">
                  {recentOrders.map((order) => (
                    <div
                      key={order.name}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                    >
                      <p className="text-xs font-medium text-slate-700">{order.name}</p>
                      <span className="rounded-full bg-forest-100 px-2 py-1 text-[10px] font-semibold text-forest-700">
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
