import React, { useContext, useState,  } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CardContext from "./store/card-context";
import CardProvider from "./store/CardProvider";



function App() {

  const [isShownCart, setIsShowCart] = useState(false);

  const showCartHAndler =() => {
    setIsShowCart(true);
  }

  const hideCartHandler =() => {
    setIsShowCart(false);
  }

  return (
    <CardProvider>
      { isShownCart && <Cart onClose = {hideCartHandler}/>}
      <Header onShow = {showCartHAndler} />
      <main>
        <Meals/>
      </main>
    </CardProvider>
  );
}

export default App;
