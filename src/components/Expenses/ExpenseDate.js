import React from 'react';
import './Expensedate.css';
const ExpenseDate=(props)=>{
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const m= props.date.toLocaleString('en-US', {month: 'long'}); 
    const year = props.date.getFullYear();
    return(
        <div className='date'>
                <div className="day">{day}</div>
                <div className="month">{m}</div>
                <div className="year">{year}</div>
            </div>

    );
}

export default ExpenseDate;