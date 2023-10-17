const asyncHandler = require("express-async-handler")
const Expense = require("../models/expenseModel")

const addTxn = asyncHandler(async(req, res) => {
    let {amount, payee, description} = req.body
    const date = new Date()
    formattedDate = date.toISOString().slice(0, 10)
    console.log("Date is: ", date.toISOString().slice(0, 10))
    const userId = req.decoded.id

    if(!amount || !payee){
        res.status(400)
        throw new Error("Empty data given")
    }

    const txn = new Expense({user_id: userId, amount, payee, description, date: formattedDate})
    await txn.save()

    console.log(`New transaction saved. The credentials of the transaction are: \n ${amount}\nTo: ${payee}\n${description}\n${date}`)
    res.status(201).json({msg: "Data recieved."})

})

const deleteTxn = asyncHandler(async(req, res) => {
    const userId = req.decoded.id
    const {idToDelete} = req.body
    console.log(`ID to delete: ${idToDelete}`)

    await Expense.deleteOne({_id: idToDelete})
    const expenses = await Expense.find({user_id: userId})
    console.log(`Expense with ID ${idToDelete}, made by user ${userId} DELETED SUCCESSFULLY\nCurrent transactions are\n${expenses}`)
    res.status(200).json({msg: "expense deleted"})
})

const viewTxn = asyncHandler(async(req, res) => {
    const id = req.decoded.id

    const expenses = await Expense.find({user_id: id})

    console.log(expenses)

    res.status(200).json({expenses})
})

const updateTxn = asyncHandler(async (req, res) => {
    const {_id} = req.body
    console.log(_id)
    const expense = await Expense.findByIdAndUpdate(_id, req.body)
    res.status(201).json({expense})
})

module.exports = {addTxn, deleteTxn, viewTxn, updateTxn}