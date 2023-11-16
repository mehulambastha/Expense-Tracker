import { parse } from 'path';
import React, { useEffect, useState } from 'react'

const ExpenseTracker = () => {
  // Fetch the data from the server
  const [expenseData, setexpenseData] = useState([])

  interface Response{
    expenses: {}
  }

  interface Expenses{
    _id: string;
    amount: number;
    description: string;
    payee: string;
    user_id: string;
    createdAt: string;
    updatedAt: string;
  }

  useEffect(() => {
    let rawResponse = {}
     
    const fetchData = async () => {
      await fetch('/api/user/expense', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then((data) => {
        rawResponse: {} = data
        setexpenseData(data)
      })
    }

    fetchData()
    console.log(rawResponse, typeof(rawResponse))
  }, [])
  return (
    <div>
    </div>
  )
}

export default ExpenseTracker
