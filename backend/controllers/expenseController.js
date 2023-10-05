const asyncHandler = require("express-async-handler")
const Expense = require("../models/expenseModel")

const addTxn = asyncHandler(async(req, res) => {
    let {amount, payee, description, date} = req.body

    const txn = new Expense({amount, payee, description, date})
    await txn.save()

    if(!amount || !payee || !date){
        res.status(400)
        throw new Error("Empty data given")
    }

})

const deleteTxn = asyncHandler(async(req, res) => {
})

const viewTxn = asyncHandler(async(req, res) => {
    let {date} = req.body
})

module.exports = {addTxn, deleteTxn, viewTxn}