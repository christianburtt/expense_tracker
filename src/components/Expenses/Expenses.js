import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
    const [filterVal, setFilterVal] = useState('2020');
    const updateFilterHandler = (selectedFilter) =>{
        //this doesn't currently do anything
        setFilterVal(selectedFilter);

        //log the value proving we've lifted state up from the filter to
        //the expenses list
        console.log(selectedFilter);
    }
    const filteredExpenses = props.expenses.filter( (expense) =>{
        return expense.date.getFullYear().toString() === filterVal;
    })
    //send the onFilterChange prop to the ExpenseFilter component so we canlift state
    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter filterVal={filterVal} onFilterChange={updateFilterHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
            
            </Card>
        </div>);

}
export default Expenses;