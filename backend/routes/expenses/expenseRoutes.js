const express = require("express")
const router = express.Router()
const {addTxn, deleteTxn, viewTxn} = require("../../controllers/expenseController")

router.route("/:id/expense").post(addTxn)
router.route("/:id/expense").get(viewTxn)
router.route("/:id/expense/delete").post(deleteTxn)

module.exports = router