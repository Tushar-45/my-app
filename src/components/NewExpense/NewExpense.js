import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props) =>{
    const saveExpenseData=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.addExpense(expenseData);
    }
       return(
        <div className="newexpense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>

       );
}
export default NewExpense;