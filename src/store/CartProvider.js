import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
    let updatedItemList
    let updatedTotalAmount
  if (action.type === "ADD") {
    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemList = [...state.items];
      updatedItemList[existingItemIndex] = updatedItem;
    } else {
      updatedItemList = state.items.concat(action.item);
    }
  } else if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];
    updatedTotalAmount = state.totalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
        updatedItemList = state.items.filter(
            (item) => item.id !== action.item.id
            );
    } else {
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
        updatedItemList = [...state.items]
        updatedItemList[existingItemIndex] = updatedItem
    }
}
return{
    items: updatedItemList,
    totalAmount: updatedTotalAmount,
}
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      item: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
