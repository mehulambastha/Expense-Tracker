const express = require("express")
const router = express.Router()
const {loginUser, registerUser} = require("../../controllers/userController")

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/").get((req, res)=>{
    res.status(200).json({Message: "User root path"})
})

module.exports = router
