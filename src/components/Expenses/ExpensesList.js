import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p>Expenses not found!!!</p>;
  if (props.filteredExpenses.length === 0) {
    return <h2>Found no expenses.</h2>;
  }

  return (
    <li>
      {props.filteredExpenses.map((oneExpense) => (
        <ExpenseItem
          key={oneExpense.id}
          title={oneExpense.title}
          amount={oneExpense.amount}
          date={oneExpense.date}
        />
      ))}
    </li>
  );
};
export default ExpensesList;
