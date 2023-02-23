
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {createStore} from "redux";

const initialState = {counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseByTimesHandler(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }

  }
})

const initialAuthState = {isAuthenticated: false}

const authSlice = createSlice({
  name: "authenticated",
  initialState: initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

// const counterReducer =(state = initialState, action) => {
//       if(action.type === "increment" && action.payload === 1) {
//         return{
//           counter: state.counter + action.payload,
//           showCounter: true
//         }
//       }

//       if(action.type === "decrement" && action.payload === 1) {
//         return {
//           counter: state.counter - action.payload,
//           showCounter: true
//         }
//       }

//       if(action.type === "incrementOrderFive" && action.payload === 5){
//         return {
//           counter: state.counter + action.payload,
//           showCounter: true
//         }
//       }
//       if (action.type === 'toggle') {
//         return {
//           showCounter: !state.showCounter,
//           counter: state.counter
//         };
//       }
//       return state
// }

// const store  = createStore(counterReducer);

// const store = configureStore({
//   reducer: counterSlice.reducer
// })


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;