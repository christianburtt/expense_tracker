import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css';

function ExpenseList(props){

        //this should be a dynamic loop for each item
        //of the props/expenses list, but I can't get that to work
        return (<Card className='expenses'><ExpenseItem 
                    title={props.expenses[0].title}
                    date={props.expenses[0].date}
                    amount={props.expenses[0].amount} />
                    <ExpenseItem 
                    title={props.expenses[1].title}
                    date={props.expenses[1].date}
                    amount={props.expenses[1].amount} />
                    <ExpenseItem 
                    title={props.expenses[2].title}
                    date={props.expenses[2].date}
                    amount={props.expenses[2].amount} />
                    <ExpenseItem 
                    title={props.expenses[3].title}
                    date={props.expenses[3].date}
                    amount={props.expenses[3].amount} />
                    </Card>);
        
}
export default ExpenseList;