const CartItem = (props) => {
  return (
    <li className="order-item">
      <div className="left-side">
        <p className="food-name">{props.name}</p>
        <div className="describe">
          <p className="price">$ {props.price}</p>
          <p className="count">x {props.amount}</p>
        </div>
      </div>
      <div className="right-side">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
