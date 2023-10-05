const express = require("express")
const router = express.Router()
const {addTxn, deleteTxn, viewTxn} = require("../../controllers/expenseController")

router.route("/:id/expense").post(addTxn)

module.exports = router