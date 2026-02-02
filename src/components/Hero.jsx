const Hero = () => {
  return (
    <section id="home" className="gradient-hero relative overflow-hidden">
      <div className="section-padding container-width grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-6">
          <span className="w-fit rounded-full border border-forest-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-forest-700">
            Eco-forward packaging
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl lg:text-6xl">
            Engineered for Nature
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Compostable Bags &amp; Sustainable Packaging Solutions designed for modern
            retailers, brands, and conscious consumers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-700"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800"
            >
              Get Quote
            </a>
          </div>
          <div className="grid gap-6 pt-4 text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-forest-800">15+</p>
              <p>Years manufacturing expertise</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-forest-800">25K+</p>
              <p>Monthly production batches</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-forest-800">100%</p>
              <p>Certified compostable</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-10 right-4 h-40 w-40 rounded-full bg-forest-200/70 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-forest-100/80 blur-3xl" />
          <div className="relative rounded-3xl border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur">
            <img
              src="/images/hero-bag.svg"
              alt="Compostable bags"
              className="h-72 w-full object-contain"
            />
            <div className="mt-4 rounded-2xl bg-forest-700 px-4 py-3 text-sm text-white">
              Certified EN 13432 &amp; ISO 17088 compliant materials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
