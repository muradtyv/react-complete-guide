import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"

function Expenses(props) {
  const [filtereYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log("in Expenses")
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filtereYear;
  });

  // let expensesContent = <p>No Expenses found!!!</p>;

  // if (filteredExpenses.lenght > 0) {
  //   expensesContent = filteredExpenses.map(oneExpense => (
  //     <ExpenseItem
  //       // key = {oneExpense.id}
  //       title={oneExpense.title}
  //       amount={oneExpense.amount}
  //       date={oneExpense.date}
  //     />
  //   ));
  // }



  return (
    <Card className="expenses">
      <ExpensesFilter
        seleceted={filtereYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList filteredExpenses = {filteredExpenses} />
      {/* {expensesContent} */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
