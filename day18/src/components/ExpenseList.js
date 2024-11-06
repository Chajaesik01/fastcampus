import React, { Component } from 'react'
import {ExpenseItem} from './ExpenseItem'
import './ExpenseList.css';
import { MdDelete } from 'react-icons/md';

export const ExpenseList = (props) => {
    console.log(props.initialExpenses)
    return (
      <div>
        <ul className='list'>
        {props.initialExpenses.map(expense => {
          return (
            <ExpenseItem 
            expense = {expense}
            key = {expense.id}
            handleDelete={props.handleDelete}/>
          )
        })}
        </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className = "icon"/>
        </button>

      </div>
    )
}

export default ExpenseList