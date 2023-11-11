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
    <>
    <div className="bg-slate-800 p-3 rounded-2xl fixed h-5/6 m-5 left-0 top-1/2">
    <ul className="my-auto left-0 menu bg-base-200 rounded-xl">      
      <li>
        <a className="tooltip tooltip-right" data-tip="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Details">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Stats">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </a>
      </li>
    </ul>
    </div>
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
    </>
  )
}

export default Dashboard
