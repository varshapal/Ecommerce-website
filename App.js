import React from "react";
import "./App.css";
import Products from "./components/Layout/Products";
import Cart from "./components/Cart/Cart";
import { Fragment, useState } from "react";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Products onShowCart={showCartHandler}/>
      
    </Fragment>
  );
}

export default App;
