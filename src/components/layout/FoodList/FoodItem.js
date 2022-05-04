import { useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";
import FormData from "./FormData";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const inputAmountRef = useRef();
  
  const addToCartHandler = (e) => {
    e.preventDefault()
    const inputAmountRefValue = inputAmountRef.current.value
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +inputAmountRefValue,
      price: foodPrice
    })
  };
  
  
  const foodPrice = props.price.toFixed(2)
  return (
    <li className="food-item">
      <div className="left-side">
        <p className="food-name">{props.name}</p>
        <p className="description">{props.desc}</p>
        <p className="price">$ {foodPrice}</p>
      </div>
      <div className="right-side">
        <FormData
          onAddItem={addToCartHandler}
          id={"inp_" + props.id}
          ref={inputAmountRef}
          input ={{
          min:1,
          max:5,
          defaultValue:1,
          step:1
          }}
        />
      </div>
    </li>
  );
};

export default FoodItem;
