const express = require("express")
const router = express.Router()
const {addTxn, deleteTxn, viewTxn} = require("../../controllers/expenseController")
const validate = require("../../middleware/validateToken")

router.route("/expense").post(validate, addTxn)
router.route("/expense").get(validate, viewTxn)
router.route("/expense/delete").post(validate, deleteTxn)

module.exports = router