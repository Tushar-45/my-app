import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm =(props)=> {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const titleChnagehandler =(event)=>{
        setEnterTitle(event.target.value);
    };
    const dateChnagehandler =(event)=>{
        setEnterDate(event.target.value);
    };
    const priceChnagehandler =(event)=>{
        setEnterPrice(event.target.value);
    };
    const submitHandler=(event)=>{
            event.preventDefault();

            const expenseData ={
                title: enterTitle,
                price: enterPrice,
                date: new Date(enterDate)
            }
            props.onSaveExpenseData(expenseData);
            setEnterDate('');
            setEnterTitle('');
            setEnterPrice('');
    }

return (
    <form onSubmit={submitHandler}>
        <div className="newexpense_controls">
            <div className="newexpense_control">
                    <label>title</label>
                    <input type="text" onChange={titleChnagehandler} value={enterTitle}></input>
                    <label>date</label>
                    <input type="date" onChange={dateChnagehandler} value={enterDate}></input>
                    <label>price</label>
                    <input type="number" onChange={priceChnagehandler} value={enterPrice}></input>
            </div>
        </div>
        <div className="newexpense_action">
                <button type="submit" >Add Expense</button>
        </div>
    </form>
)
}
export default ExpenseForm;