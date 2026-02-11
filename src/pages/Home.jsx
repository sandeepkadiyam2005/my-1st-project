import { useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Products from "../components/Products.jsx";
import Benefits from "../components/Benefits.jsx";
import Materials from "../components/Materials.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ProductDetailsModal from "../components/ProductDetailsModal.jsx";
import CartDrawer from "../components/CartDrawer.jsx";
import OrderConfirmation from "../components/OrderConfirmation.jsx";
import AuthPortal from "../components/AuthPortal.jsx";
import CartExperience from "../components/CartExperience.jsx";
import PaymentAddress from "../components/PaymentAddress.jsx";
import ArchitectureSection from "../components/ArchitectureSection.jsx";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setSelectedProduct(null);
    setIsCartOpen(true);
    setIsOrderConfirmed(false);
  };

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
    setIsOrderConfirmed(false);
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
    setIsOrderConfirmed(false);
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setIsOrderConfirmed(false);
  };

  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      setIsOrderConfirmed(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <AuthPortal />
        <Products onViewProduct={setSelectedProduct} />
        <CartExperience cartItems={cartItems} />
        <PaymentAddress onConfirmOrder={handleConfirmOrder} />
        <OrderConfirmation isConfirmed={isOrderConfirmed} />
        <Benefits />
        <Materials />
        <About />
        <ArchitectureSection />
        <Contact />
      </main>
      <Footer />
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default Home;
