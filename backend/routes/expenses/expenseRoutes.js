const express = require("express")
const router = express.Router()
const {addTxn, deleteTxn, viewTxn, updateTxn} = require("../../controllers/expenseController")
const validate = require("../../middleware/validateToken")

router.route("/expense").post(validate, addTxn).get(validate, viewTxn).delete(validate, deleteTxn).put(validate, updateTxn)

module.exports = router