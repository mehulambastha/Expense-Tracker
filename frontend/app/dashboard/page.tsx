"use client"
import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [isLoaded, setisLoaded] = useState(false)
  const [expenseData, setexpenseData] = useState({})

  useEffect(() => {
    
    const fetchData = async () => {
      await fetch('/api/user/expense', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then((data: {}) => {
        setexpenseData(data)
      })
    }

    fetchData()
    setisLoaded(true)
  }, [expenseData])

  return (
    <div className="stats bg-primary text-primary-content">
      <div className="stat">
      <div className="w-7">{JSON.stringify(expenseData)}</div>
        <div className="stat-title">Account balance</div>
        <div className="stat-value">$89,400</div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success">Add funds</button>
        </div>
      </div>
      
      <div className="stat">
        <div className="stat-title">Current balance</div>
        <div className="stat-value">$89,400</div>
        <div className="stat-actions">
          <button className="btn btn-sm">Withdrawal</button> 
          <button className="btn btn-sm">deposit</button>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
