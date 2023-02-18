import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import UserList from "./UserList";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const saveUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
        setError({
            title: "Invalid Error",
            meesage: "Pls enter a valid name"
        })
      return;
    }
    if (+enteredAge < 0) {
        setError({
            title: "Invalid Error",
            meesage: "Pls enter a valid age (>0)"
        })
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
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
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type={"text"}
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
        <UserList />
      </Card>
    </div>
  );
};

export default AddUser;
