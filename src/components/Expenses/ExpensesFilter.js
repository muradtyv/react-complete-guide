import "./ExpensesFilter"

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  }


  return (
    <div className="expennses-filter">
      <div className="expenses-filter__control">
        <label>Filter by years</label>
        <select value={props.seleceted} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
