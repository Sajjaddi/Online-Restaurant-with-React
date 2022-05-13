import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cardCtx = useContext(CartContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`

  const hasItems = cardCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cardCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cardCtx.addItem({
      ...item,
      amount: 1,
  })
  }

  const cartItem = cardCtx.items.map((item) => (
    <CartItem onAdd={cartItemAddHandler.bind(null,item)} onRemove={cartItemRemoveHandler.bind(null,item.id)} key={item.id} name={item.name} price={item.price} amount={item.amount}>
      {item.name}
    </CartItem>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItem}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
