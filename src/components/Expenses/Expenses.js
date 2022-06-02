import React from 'react';
 import './Expenses.css';
import Expenseitem from './Expenseitem';
import Card from '../UI/Card';

const Expenses=(props)=>{
    return (
    <Card className="expenses">
    <Expenseitem 
    title={props.exp[0].title} 
    rate={props.exp[0].price} 
    date ={props.exp[0].date}/>
    <Expenseitem 
    title={props.exp[1].title} 
    rate={props.exp[1].price} 
    date ={props.exp[1].date}/>
    <Expenseitem 
    title={props.exp[2].title} 
    rate={props.exp[2].price} 
    date ={props.exp[2].date}/>
    <Expenseitem 
    title={props.exp[3].title} 
    rate={props.exp[3].price} 
    date ={props.exp[3].date}/>
    <Expenseitem 
    title={props.exp[4].title} 
    rate={props.exp[4].price} 
    date ={props.exp[4].date}/>
    </Card>
    );
}
export default Expenses;