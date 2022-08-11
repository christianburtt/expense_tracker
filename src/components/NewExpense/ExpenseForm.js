import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmt, setEnteredAmt] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmt: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    const amtChangeHandler = (event) =>{
        setEnteredAmt(event.target.value);

    }
    const dateChangedHandler = (event) =>{
        setEnteredDate(event.target.value);

    }
    const submitHandler =(event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmt,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmt('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
            
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmt} onChange={amtChangeHandler} />
                </div>
           
            
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;