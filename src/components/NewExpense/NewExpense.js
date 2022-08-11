import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [formStatus, setFormStatus] = useState('hidden');

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormStatus('hidden');
        // console.log(expenseData);
    };    

    const cancelHandler = ()=>{
        setFormStatus('hidden');
    }
    const showForm = () =>{
        setFormStatus('show');
    }

    if(formStatus === 'hidden'){
        return (<div className='new-expense'>
            <button onClick={showForm}>Add New Expense</button>
        </div>)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;