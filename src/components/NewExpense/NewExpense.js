import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense =(props) => {

    const [isEditing,setIsEditing] = useState(false);

    const starteditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditing =() => {
        setIsEditing(false);
    } 

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        // console.log(expenseData); 
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={starteditingHandler}>Add New Expenses</button> }
            {isEditing && <ExpenseForm onStopEditingHandler = {stopEditing} onSaveExpenseData = {saveExpenseDataHandler}/> }
        </div>
    )
}

export default NewExpense;