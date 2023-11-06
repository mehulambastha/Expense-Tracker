const express = require("express")
const router = express.Router()
const {loginUser, registerUser, currentUser, updateUser, addMoney, allUsers} = require("../../controllers/userController")
const validate = require("../../middleware/validateToken")

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/").get((req, res)=>{
    res.status(200).json({Message: "User root path"})
})
router.route("/user").get(validate, currentUser).put(updateUser)
router.route("/user/all").get(allUsers)
router.route("/user/addMoney").post(validate, addMoney)

module.exports = router