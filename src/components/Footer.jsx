const Footer = () => {
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="section-padding container-width grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest-900">
              E
            </span>
            Econirva
          </div>
          <p className="text-sm text-forest-200">
            Premium compostable carry bags and packaging engineered for sustainable
            business growth.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forest-200">
            Links
          </p>
          <ul className="mt-4 space-y-3 text-sm text-forest-100">
            <li>
              <a href="#products" className="transition hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#materials" className="transition hover:text-white">
                Materials
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forest-200">
            Connect
          </p>
          <div className="mt-4 space-y-3 text-sm text-forest-100">
            <p>Hyderabad, India</p>
            <p>+91 98765 43210</p>
            <p>hello@econirva.com</p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            {["facebook", "linkedin", "instagram"].map((platform) => (
              <span
                key={platform}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 14.5v-5H9v-2h2V8.3c0-1.7 1-2.8 2.6-2.8.8 0 1.5.1 1.5.1v2h-.9c-.9 0-1.1.4-1.1 1v1.1h2l-.3 2h-1.7v5H11Z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-forest-800 py-4 text-center text-xs text-forest-300">
        © 2024 Econirva Compostable Bags. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
