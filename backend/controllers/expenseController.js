const asyncHandler = require("express-async-handler")
const Expense = require("../models/expenseModel")

const addTxn = asyncHandler(async(req, res) => {
    let {amount, payee, description, date} = req.body
    const userId = req.params.id

    if(!amount || !payee){
        res.status(400)
        throw new Error("Empty data given")
    }

    const txn = new Expense({user_id: userId, amount, payee, description, date})
    await txn.save()

    console.log(`New transaction saved. The credentials of the transaction are: \n ${amount}\nTo: ${payee}\n${description}\n${date}`)
    res.status(201).json({msg: "Data recieved."})

})

const deleteTxn = asyncHandler(async(req, res) => {
    const userId = req.params.id
    const {idToDelete} = req.body
    console.log(`ID to delete: ${idToDelete}`)

    await Expense.deleteOne({_id: idToDelete})
    const expenses = await Expense.find({user_id: userId})
    console.log(`Expense with ID ${idToDelete}, made by user ${userId} DELETED SUCCESSFULLY\nCurrent transactions are\n${expenses}`)
    res.status(200).json({msg: "expense deleted"})
})

const viewTxn = asyncHandler(async(req, res) => {
    const id = req.params.id

    const expenses = await Expense.find({user_id: id})

    console.log(expenses)

    res.status(200).json({msg: `Data recieved: ${expenses}`})
})

module.exports = {addTxn, deleteTxn, viewTxn}