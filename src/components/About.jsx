const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            About Econirva
          </p>
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            One-stop sustainable solution for brands ready to go green
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Econirva manufactures premium compostable carry bags and packaging products
            tailored for retail, food, and consumer goods industries. Our production
            lines are optimized for efficiency, customization, and sustainable sourcing.
          </p>
          <p className="text-sm text-slate-600 sm:text-base">
            With advanced extrusion and conversion capabilities, we deliver consistent
            quality at scale. Every batch is engineered to meet global compostability
            standards while maintaining the performance your business demands.
          </p>
        </div>
        <div className="rounded-3xl border border-forest-100 bg-forest-50 p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-forest-900">Manufacturing at scale</h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-forest-800">Capability:</span> Custom
              thickness, GSM, and printing solutions.
            </li>
            <li>
              <span className="font-semibold text-forest-800">Location:</span> Hyderabad,
              India with pan-India and export logistics.
            </li>
            <li>
              <span className="font-semibold text-forest-800">Service:</span> Dedicated
              R&amp;D team for innovative compostable formulations.
            </li>
          </ul>
          <div className="mt-8 rounded-2xl border border-forest-200 bg-white p-4">
            <p className="text-sm font-semibold text-forest-800">
              Backend work through company side
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Every request moves through our in-house planning, sourcing, production,
              quality assurance, and dispatch teams to ensure consistent delivery
              timelines and compliance documentation.
            </p>
          </div>
          <div className="mt-8 rounded-2xl bg-white p-4 text-sm text-forest-800">
            Certified one-stop partner for brands transitioning to sustainable packaging.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
