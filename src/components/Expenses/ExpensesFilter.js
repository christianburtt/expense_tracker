import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    //this is the eventhandler for changing the actual filter select
    const updateFilter = (event) =>{
        //we send it to the onFilterChange prop we got 
        props.onFilterChange(event.target.value);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={updateFilter} value={props.filterVal}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;