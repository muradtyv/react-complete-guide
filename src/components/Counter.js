import { render } from "@testing-library/react";
import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index.js";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseByTimesHandler = () => {
    dispatch(counterActions.increaseByTimesHandler(5));
  };
  //  const resetHandlet = () => {
  //   dispatch({type: "reset"});
  //  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseByTimesHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   render() {
//     return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//       </div>
//       <button>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"})
//   }
// }

export default Counter;
