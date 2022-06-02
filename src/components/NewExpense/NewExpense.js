import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense =() =>{
    const saveExpenseData=(enterExpenseData)=>{
        console.log(enterExpenseData);
    }
       return(
        <div className="newexpense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>

       );
}
export default NewExpense;