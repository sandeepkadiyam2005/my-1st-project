import { useState } from "react";
import Hero from "../components/Hero.jsx";
import Products from "../components/Products.jsx";
import Benefits from "../components/Benefits.jsx";
import Materials from "../components/Materials.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import ProductDetailsModal from "../components/ProductDetailsModal.jsx";
import CartDrawer from "../components/CartDrawer.jsx";
import { useStore } from "../context/StoreContext.jsx";

const PortalHomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, addToCart, increaseQty, decreaseQty, removeFromCart } = useStore();

  return (
    <>
      <Hero />
      <Products onViewProduct={setSelectedProduct} />
      <Benefits />
      <Materials />
      <About />
      <Contact />

      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
      />
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft"
      >
        Open Cart
      </button>
    </>
  );
};

export default PortalHomePage;
