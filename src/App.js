import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
let DUMMY_EXPENSE =[
     {
          id: 'e1',
          title: 'school fee',
          price: 500,
          date: new Date(2022, 3, 25),
     },
     {
          id: 'e2',
          title: 'Libaray fee',
          price: 900,
          date: new Date(2002, 3, 29),
     },
     {
          id: 'e3',
          title: 'Tution fee',
          price: 800,
          date: new Date(2022, 5, 25),
     }
     ,
     {
          id: 'e4',
          title: 'collage fee',
          price: 1000,
          date: new Date(2012, 5, 25),
     }
     ,
     {
          id: 'e5',
          title: 'dance fee',
          price: 900,
          date: new Date(2022, 5, 9),
     }
 ];
const App=()=>{
      const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (Expense)=>{
         const updatedExpense =[Expense, ...expenses]
         setExpenses(updatedExpense)
    }
    return (
        <div>
            <h1>Project 1 </h1>
            <NewExpense addExpense = {addExpenseHandler}/>
            <Expenses exp ={expenses}/>
        </div>
    );
}

export default App;