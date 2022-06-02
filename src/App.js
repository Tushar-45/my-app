import NewExpense from './components/NewExpense/NewExpense';
import React from 'react';
import Expenses from "./components/Expenses/Expenses";
const App=()=>{
    let expense =[
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
    return (
        <div>
            <h1>Project 1 </h1>
            <NewExpense />
            <Expenses exp ={expense}/>
        </div>
    );
}

export default App;