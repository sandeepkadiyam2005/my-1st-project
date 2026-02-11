const benefits = [
  "100% Compostable",
  "BPA Free & Non-toxic",
  "ISO 17088 Certified",
  "Breaks down in 90–120 days",
  "In-house manufacturing",
  "Superior quality"
];

const Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            Why choose us
          </p>
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            Sustainability backed by engineering
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            We blend premium compostable materials, certified production practices, and
            innovation to deliver bags that outperform expectations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-2xl border border-forest-100 bg-forest-50/60 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 6.253a.75.75 0 0 1 .081 1.057l-9 11.25a.75.75 0 0 1-1.086.059l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.908 3.907 8.469-10.586a.75.75 0 0 1 1.068-.127Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-forest-900">{benefit}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Verified by independent labs and trusted by leading sustainable brands.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
