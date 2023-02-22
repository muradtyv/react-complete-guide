import { useReducer } from "react";
import CardContext from "./card-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exsistingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exsistingCartItem = state.items[exsistingCartItemIndex];

    let updatedItems;
    if (exsistingCartItem) {
      const updateItem = {
        ...exsistingCartItem,
        amount: exsistingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];

      updatedItems[exsistingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartaction] = useReducer(
    cartreducer,
    defaultCartState
  );

  const additemToCartHandler = (item) => {
    dispatchCartaction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartaction({ type: "REMOVE", id: id });
  };

  const cardcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: additemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CardContext.Provider value={cardcontext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
