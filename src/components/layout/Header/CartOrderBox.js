import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

const CartOrderBox = (props) => {
  const [isShowCart, setIsShowCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartAmountCount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length) {
      setIsShowCart(true);
    }
    const timer = setTimeout(() => {
      setIsShowCart(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  const cartClassName = `cart ${isShowCart ? "bump" : null}`;

  return (
    <div className={cartClassName} onClick={props.onShowCart}>
      <div className="key">
        <i className="fas fa-shopping-cart" />
        Your Cart
      </div>
      <div className="value">{cartAmountCount}</div>
    </div>
  );
};

export default CartOrderBox;
