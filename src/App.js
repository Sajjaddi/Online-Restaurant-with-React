import React, { useState } from "react";
import "./assets/css/style.min.css";
import FoodList from "./components/layout/FoodList/FoodList";
import Header from "./components/layout/Header/Header";
import Cart from "./components/layout/Cart/Cart";
import Slide from "./components/layout/Slide/Slide";
import CartProvider from "./store/CartProvider";

export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);

  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Slide />
      <FoodList />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}
