import QuoteForm from "./QuoteForm.jsx";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-forest-50/80">
      <div className="container-width grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            Get a quote
          </p>
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            Let&apos;s build your compostable packaging plan
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Share your requirements and our specialists will recommend the right
            compostable material, thickness, and printing options to match your brand.
          </p>
          <div className="rounded-2xl border border-forest-100 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-forest-800">Econirva Manufacturing</p>
            <p className="mt-2">Hyderabad, Telangana, India</p>
            <p className="mt-1">+91 98765 43210 · hello@econirva.com</p>
          </div>
        </div>
        <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-sm sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
