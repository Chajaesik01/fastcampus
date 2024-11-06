import React, { Component } from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';
import './ExpenseItem.css'

export const ExpenseItem = ({expense, handleDelete}) => {

    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'>{expense.amount} 원</span>
        </div>
        <div>
            <button className='edit-btn'><MdEdit /></button>
            <button className='clear-btn' 
            onClick={ () => 
              handleDelete(expense.id)
              } 
            >
                <MdDelete/></button>
        </div>
      </li>
    )
}

export default ExpenseItem