import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import ModalOverlay from "../Modal/ModalOverlay";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1
    })
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem({
      id: id
    })
  }

  const orderList = items.map((item) => {
    return (
      <CartItem key={item.id} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} name={item.name} price={item.price} amount={item.amount} />
    );
  });

  return (
    <ModalOverlay onHideCart={onHideCart}>
      <ul>{orderList}</ul>
      <footer>
        <div className="amount">
          <p>Total Amount</p>
          <p>$ {cartCtx.totalAmount.toFixed(2)}</p>
        </div>
        <div className="navigate">
          <button onClick={onHideCart}>Close</button>
          {cartCtx.items.length > 0 ? <button>Order</button> : null}
        </div>
      </footer>
    </ModalOverlay>
  );
};

export default Cart;
