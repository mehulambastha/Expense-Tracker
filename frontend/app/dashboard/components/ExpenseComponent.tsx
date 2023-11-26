import React, { FunctionComponent } from 'react'

interface Expense{
  data: {
  _id: string;
  amount: number;
  description: string;
  payee: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
  }
}

const ExpenseComponent: FunctionComponent<Expense> = ({data}) => {
  return(
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked={true} /> 
        <div className="collapse-title text-xl font-medium">
          <span>To {data.payee}</span>\t<span>₹ {data.amount}</span>
        </div>
        <div className="collapse-content"> 
          <p>{data.description}</p>
        </div>
      </div>
    </>
  )
}

export default ExpenseComponent

