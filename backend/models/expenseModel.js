const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: [true, "Enter amount"] 
    },
    payee: {
        type: String,
        required: [true, "Payee"]
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Expense", expenseSchema)