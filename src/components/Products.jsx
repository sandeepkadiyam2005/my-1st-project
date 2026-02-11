import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const Products = ({ onViewProduct }) => {
  return (
    <section id="products" className="section-padding bg-forest-50/60">
      <div className="container-width">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-600">
            Products
          </p>
          <h2 className="text-3xl font-semibold text-forest-900 sm:text-4xl">
            Compostable packaging built for every industry
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            From retail carry bags to certified compostable films, Econirva delivers
            sustainable packaging that performs like conventional plastic without
            harming the planet.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onView={onViewProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
