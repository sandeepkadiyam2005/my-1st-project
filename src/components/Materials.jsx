const materials = [
  {
    title: "PLA (Corn starch)",
    description: "Plant-based resin that delivers strength, clarity, and fast composting."
  },
  {
    title: "Bio-based polymers",
    description: "Flexible blends engineered for durability, tear resistance, and sealing."
  },
  {
    title: "Natural filler master batch",
    description: "Mineral reinforcements that optimize thickness, feel, and biodegradation."
  }
];

const Materials = () => {
  return (
    <section id="materials" className="section-padding bg-forest-50">
      <div className="container-width">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            Raw materials
          </p>
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            Ingredients that go back to the earth
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.title}
              className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-forest-600/10" />
              <h3 className="text-lg font-semibold text-forest-900">{material.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{material.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
