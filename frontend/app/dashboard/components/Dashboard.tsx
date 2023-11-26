import { parse } from 'path';
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import ExpenseComponent from './ExpenseComponent';

const Dashboard = () => {
  // Fetch the data from the server
  interface RawResponse{
    expenses: Array<{
      _id: string;
      amount: number;
      description: string;
      payee: string;
      user_id: string;
      createdAt: string;
      updatedAt: string;
    }>
  }   

  const rawRes = await fetch('/api/user/expense', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
  const expenseList = rawRes.expenses

  return (
    <div>
      {expenseList.expenses.map(expense=>{
        return(
          <ExpenseComponent data={expense} key={expense._id}/>
        )
      })}
    </div>
  )
}

export default Dashboard
