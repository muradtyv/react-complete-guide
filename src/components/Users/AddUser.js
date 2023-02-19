import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import UserList from "./UserList";

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef= useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const saveUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameRef.current.value)
    const nameInputValue = nameRef.current.value;
    const ageInputValue = ageRef.current.value;
    if (nameInputValue.trim().length === 0 && ageInputValue.trim().length === 0) {
        setError({
            title: "Invalid Error",
            meesage: "Pls enter a valid name"
        })
      return;
    }
    if (+ageInputValue < 0) {
        setError({
            title: "Invalid Error",
            meesage: "Pls enter a valid age (>0)"
        })
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(nameInputValue, ageInputValue);
    // setEnteredAge("");
    // setEnteredUsername("");
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={saveUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type={"text"}
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref = {nameRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type={"text"}
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref = {ageRef}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
