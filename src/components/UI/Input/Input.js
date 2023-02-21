import React from "react";
import { useEffect, useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

//   useEffect(() => {
//     console.log("input")
//     console.log( inputRef.current.focus())
//   }, []);

const activate = () => {
    inputRef.current.focus();
}

useImperativeHandle(ref, () => {
    return {
        focus: activate
    }
})

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : null
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      
    </div>
  );
});

export default Input;
