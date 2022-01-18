import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.amount} />
        <div className='expense-item__description'>
          <h2>{props.date}</h2>
          <div className='expense-item__price'>${props.title}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;