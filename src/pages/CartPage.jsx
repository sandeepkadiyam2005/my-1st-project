import CartExperience from "../components/CartExperience.jsx";
import { useStore } from "../context/StoreContext.jsx";

const CartPage = () => {
  const { cartItems } = useStore();

  return (
    <div className="min-h-[70vh]">
      <CartExperience cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
