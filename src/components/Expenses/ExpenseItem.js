import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {


  // const [title, setTitle] = useState(props.title);

  // console.log("Exhausted by React!!!")

  // const changeTitle = () =>{
  //   setTitle("Updated!");
  //   console.log(title);
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={changeTitle}>Change</button> */}
    </Card>
  );
}

export default ExpenseItem;