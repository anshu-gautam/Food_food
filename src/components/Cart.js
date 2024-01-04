import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const carItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-red-400 text-white rounded-lg my-2 p-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {carItems.length === 0 && (
          <h1>Your Cart is empty! Please add some items</h1>
        )}
        <ItemList items={carItems} />
      </div>
    </div>
  );
};

export default Cart;
