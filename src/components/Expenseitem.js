import './Expenseitem.css';

function Expenseitem(props){
    const month = props.date.toLocalString('en-US', {month: 'long'});
    return(
        <div className="expense-item">
            <div>{month}</div>
            <div classsName="expense-item__desc">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    );
}

export default Expenseitem;