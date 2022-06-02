import React, {useState} from 'react';
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expenseitem=(props)=>{
    
    // const [newTitle, setNewTitle] = useState("");
    // const [title, setTitle] = useState(props.title);

    // const clickHandler =()=> {
    //     setTitle(newTitle);
    // }
    // const changeHandler =(event)=> {
    //     setNewTitle(event.target.value);
    // }
     return(
        <Card className='expense-item'>

            <ExpenseDate date ={props.date}/>
            <div className='reason'> 
                <h2>{props.title}</h2>
                <div className='expense_price'>{props.rate}$</div>
            </div>
            {/* <input type ="text" value ={newTitle} onChange={changeHandler} ></input>
            <button onClick={clickHandler}> 
                change item
            </button> */}

        </Card>
     );
}

export default Expenseitem;