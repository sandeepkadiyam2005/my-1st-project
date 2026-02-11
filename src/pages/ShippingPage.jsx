import PaymentAddress from "../components/PaymentAddress.jsx";
import OrderConfirmation from "../components/OrderConfirmation.jsx";
import { useStore } from "../context/StoreContext.jsx";

const ShippingPage = () => {
  const { confirmOrder, isOrderConfirmed } = useStore();

  return (
    <div>
      <PaymentAddress onConfirmOrder={confirmOrder} />
      <OrderConfirmation isConfirmed={isOrderConfirmed} />
    </div>
  );
};

export default ShippingPage;
