import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnterEdtitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangehandler = (event) => {
        setEnterEdtitle(event.target.value)
        // console.log(enteredTitle);
    }

    const amountChangeHandler =(event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type={"text"} onChange = {titleChangehandler}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type={"number"}  min="0.01" step="0.01"  onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type={"date"} min = "2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type = "submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
