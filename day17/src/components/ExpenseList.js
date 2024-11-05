import React, { Component } from 'react'
import {ExpenseItem} from './ExpenseItem'
import './ExpenseList.css';
export class ExpenseList extends Component {
  render() {
    return (
      <div>
        <ul className='list'>
            <ExpenseItem/>
        </ul>
        <button className='btn'>
            목록지우기
        </button>

      </div>
    )
  }
}

export default ExpenseList