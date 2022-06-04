import React from "react";
import "./Expenses.css";
import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
        {
            props.exp.map(
                Expense=>(
                    <Expenseitem
                      title={Expense.title}
                      rate={Expense.price}
                      date={Expense.date}
                    />
                )
            )
        }
    </Card>
  );
};
export default Expenses;
